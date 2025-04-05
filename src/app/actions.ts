'use server'

import { cookies } from 'next/headers'
import webpush, { PushSubscription } from 'web-push'

const HIDE_INSTALL_PROMPT_COOKIE = 'hide_pwa_install_prompt'

// Configure web-push
if (!process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY || !process.env.VAPID_PRIVATE_KEY) {
    console.error(
        'Error: VAPID keys not configured. Please add NEXT_PUBLIC_VAPID_PUBLIC_KEY and VAPID_PRIVATE_KEY to your environment variables.',
    )
} else {
    webpush.setVapidDetails(
        'mailto:hello@yellowdog.agency', // Replace with your email
        process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY,
        process.env.VAPID_PRIVATE_KEY,
    )
}

// --- Push Notification Subscription Management ---
// In a real app, store subscriptions in a database
let currentSubscription: PushSubscription | null = null

export async function subscribeUser(subscription: PushSubscription) {
    console.log('Subscribing user:', subscription)
    // TODO: Store subscription in DB
    currentSubscription = subscription
    return { success: true }
}

export async function unsubscribeUser(endpoint: string) {
    console.log('Unsubscribing user with endpoint:', endpoint)
    // TODO: Remove subscription from DB based on endpoint
    if (currentSubscription?.endpoint === endpoint) {
        currentSubscription = null
    }
    return { success: true }
}

export async function sendNotification(message: string) {
    if (!currentSubscription) {
        console.error('No subscription available to send notification')
        // It might be better to query the DB for subscriptions here
        return { success: false, error: 'No subscription available' }
    }

    try {
        await webpush.sendNotification(
            currentSubscription,
            JSON.stringify({
                title: 'Yellowdog Update',
                body: message,
                icon: '/icons/icon-192x192.webp',
            }),
        )
        console.log('Notification sent successfully.')
        return { success: true }
    } catch (error) {
        console.error('Error sending push notification:', error)
        // If subscription is invalid (e.g., 410 Gone), remove it from DB
        if (error instanceof Error && 'statusCode' in error && error.statusCode === 410) {
            await unsubscribeUser(currentSubscription.endpoint)
        }
        return { success: false, error: 'Failed to send notification' }
    }
}

// --- PWA Install Prompt Cookie Management ---
export async function dismissInstallPrompt() {
    const cookieStore = await cookies()
    cookieStore.set(HIDE_INSTALL_PROMPT_COOKIE, 'true', {
        expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
        path: '/',
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true,
        sameSite: 'lax',
    })
    console.log('Dismiss install prompt cookie set.')
    return { success: true }
}
