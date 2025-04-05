'use client'

import { subscribeUser, unsubscribeUser } from '@/app/actions'
import { useEffect, useState } from 'react'
import type { PushSubscription as WebPushSubscription } from 'web-push'

// Function to convert VAPID key
function urlBase64ToUint8Array(base64String: string): Uint8Array {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
    const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/')
    const rawData = window.atob(base64)
    const outputArray = new Uint8Array(rawData.length)
    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i)
    }
    return outputArray
}

export default function PushNotificationManager() {
    const [isSubscribed, setIsSubscribed] = useState(false)
    const [subscription, setSubscription] = useState<PushSubscription | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        if ('serviceWorker' in navigator && 'PushManager' in window) {
            navigator.serviceWorker.ready
                .then((registration) => {
                    setSubscription(null) // Reset on ready
                    setError(null)
                    // Check current subscription status
                    return registration.pushManager.getSubscription()
                })
                .then((currentSubscription) => {
                    if (currentSubscription) {
                        console.log('User IS subscribed.')
                        setSubscription(currentSubscription)
                        setIsSubscribed(true)
                    } else {
                        console.log('User is NOT subscribed.')
                        setIsSubscribed(false)
                    }
                })
                .catch((err) => {
                    console.error('Error during service worker ready/check:', err)
                    setError('Error checking push subscription status.')
                })
                .finally(() => {
                    setIsLoading(false)
                })
        } else {
            console.warn('Push messaging is not supported')
            setError('Push notifications not supported by this browser.')
            setIsLoading(false)
        }
    }, [])

    const handleSubscribe = async () => {
        if (!process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY) {
            setError('VAPID public key not configured.')
            return
        }
        if (!navigator.serviceWorker.ready) {
            setError('Service worker not ready.')
            return
        }

        setIsLoading(true)
        setError(null)

        try {
            const registration = await navigator.serviceWorker.ready
            const applicationServerKey = urlBase64ToUint8Array(process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY)
            const newSubscription = await registration.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: applicationServerKey,
            })

            console.log('User subscribed:', newSubscription)
            // Send subscription to server action
            const result = await subscribeUser(newSubscription.toJSON() as WebPushSubscription)
            if (result.success) {
                setSubscription(newSubscription)
                setIsSubscribed(true)
            } else {
                throw new Error('Failed to save subscription on server.')
            }
        } catch (err) {
            console.error('Failed to subscribe the user: ', err)
            setError('Failed to subscribe. Please ensure notifications are allowed.')
            setIsSubscribed(false)
            setSubscription(null)
        } finally {
            setIsLoading(false)
        }
    }

    const handleUnsubscribe = async () => {
        if (!subscription) {
            setError('No active subscription to unsubscribe.')
            return
        }

        setIsLoading(true)
        setError(null)

        try {
            const successfulUnsubscribe = await subscription.unsubscribe()
            if (successfulUnsubscribe) {
                console.log('User unsubscribed locally.')
                // Notify server action
                const result = await unsubscribeUser(subscription.endpoint)
                if (!result.success) {
                    console.warn('Failed to notify server of unsubscription.')
                }
                setSubscription(null)
                setIsSubscribed(false)
            } else {
                throw new Error('Local unsubscribe failed.')
            }
        } catch (err) {
            console.error('Error unsubscribing', err)
            setError('Failed to unsubscribe.')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="bg-base-200 mt-4 rounded p-4">
            <h4 className="font-semibold">Push Notifications</h4>
            {isLoading && <p>Checking subscription status...</p>}
            {error && <p className="text-error">{error}</p>}
            {!isLoading && !error && (
                <>
                    {isSubscribed ? (
                        <button
                            className="btn btn-warning btn-sm mt-2"
                            onClick={handleUnsubscribe}
                            disabled={isLoading}
                        >
                            Unsubscribe from Notifications
                        </button>
                    ) : (
                        <button className="btn btn-success btn-sm mt-2" onClick={handleSubscribe} disabled={isLoading}>
                            Subscribe to Notifications
                        </button>
                    )}
                </>
            )}
        </div>
    )
}
