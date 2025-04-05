'use client'

import { useEffect, useState } from 'react'

// Define the event type (adjust based on actual event structure if needed)
interface BeforeInstallPromptEvent extends Event {
    readonly platforms: string[]
    readonly userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>
    prompt(): Promise<void>
}

export default function InstallPrompt() {
    const [installPromptEvent, setInstallPromptEvent] = useState<BeforeInstallPromptEvent | null>(null)
    const [isIOS, setIsIOS] = useState(false)
    const [isStandalone, setIsStandalone] = useState(false)

    useEffect(() => {
        // Check if running on iOS
        setIsIOS(/iPad|iPhone|iPod/.test(navigator.userAgent) && !('MSStream' in window))

        // Check if running in standalone mode (already installed)
        if (window.matchMedia('(display-mode: standalone)').matches) {
            setIsStandalone(true)
        }

        const beforeInstallPromptHandler = (event: Event) => {
            // Prevent the default browser prompt
            event.preventDefault()
            // Store the event so it can be triggered later
            setInstallPromptEvent(event as BeforeInstallPromptEvent)
        }

        window.addEventListener('beforeinstallprompt', beforeInstallPromptHandler)

        return () => {
            window.removeEventListener('beforeinstallprompt', beforeInstallPromptHandler)
        }
    }, [])

    const handleInstallClick = async () => {
        if (!installPromptEvent) return

        // Show the browser's install prompt
        installPromptEvent.prompt()

        // Wait for the user to respond to the prompt
        const { outcome } = await installPromptEvent.userChoice

        // Optionally, send analytics event with outcome of user interaction
        console.log(`User response to the install prompt: ${outcome}`)

        // We've used the prompt, and can't use it again, discard it
        setInstallPromptEvent(null)
    }

    // Don't show prompt if already installed or on incompatible iOS
    if (isStandalone) {
        return null
    }

    // Show specific instructions for iOS Safari
    if (isIOS && !installPromptEvent) {
        return (
            <div className="bg-base-200 fixed bottom-4 left-4 z-50 rounded-lg p-4 shadow-lg">
                <p className="text-base-content text-sm">
                    To install this app, tap the share icon
                    <span role="img" aria-label="share icon" className="mx-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="inline-block h-4 w-4 align-text-bottom"
                        >
                            <path
                                fillRule="evenodd"
                                d="M15.75 4.5a3 3 0 1 1 .75 5.906l-4.4 2.474a3.004 3.004 0 0 1 0 1.24l4.4 2.474A3 3 0 1 1 15 19.5a3 3 0 0 1-.75-5.906l-4.4-2.474a3.004 3.004 0 0 1 0-1.24l4.4-2.474A3 3 0 0 1 15.75 4.5Zm0 1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm0 9a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"
                                clipRule="evenodd"
                            />
                            <path d="M8.25 9.75a3 3 0 1 0 0 4.5 3 3 0 0 0 0-4.5ZM6 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                        </svg>
                    </span>
                    and then &ldquo;Add to Home Screen&rdquo;
                    <span role="img" aria-label="plus icon" className="mx-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="inline-block h-4 w-4 align-text-bottom"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </span>
                    .
                </p>
            </div>
        )
    }

    // Show install button if the prompt event is available (non-iOS or compatible PWA browser)
    if (installPromptEvent) {
        return (
            <div className="fixed bottom-4 left-4 z-50">
                <button className="btn btn-primary btn-sm shadow-lg" onClick={handleInstallClick}>
                    Install App
                </button>
            </div>
        )
    }

    // Render nothing if no prompt is needed/available
    return null
}
