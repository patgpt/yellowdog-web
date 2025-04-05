'use client'

import Cookies from 'js-cookie'
import { useEffect, useRef, useState } from 'react'
import { dismissInstallPrompt } from '../../app/actions'

// Define the event type
interface BeforeInstallPromptEvent extends Event {
    readonly platforms: string[]
    readonly userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>
    prompt(): Promise<void>
}

const HIDE_INSTALL_PROMPT_COOKIE = 'hide_pwa_install_prompt'

export default function InstallDialog() {
    const dialogRef = useRef<HTMLDialogElement>(null)
    const [installPromptEvent, setInstallPromptEvent] = useState<BeforeInstallPromptEvent | null>(null)
    const [isIOS, setIsIOS] = useState(false)
    const [isStandalone, setIsStandalone] = useState(false)
    const [showDialog, setShowDialog] = useState(false)

    useEffect(() => {
        setIsIOS(/iPad|iPhone|iPod/.test(navigator.userAgent) && !('MSStream' in window))
        if (window.matchMedia('(display-mode: standalone)').matches) {
            setIsStandalone(true)
        }

        const beforeInstallPromptHandler = (event: Event) => {
            // Read cookie directly inside the handler
            const hidePromptCurrently = Cookies.get(HIDE_INSTALL_PROMPT_COOKIE)
            event.preventDefault()
            // Use the freshly read value
            if (!hidePromptCurrently && !isStandalone) {
                setInstallPromptEvent(event as BeforeInstallPromptEvent)
                setShowDialog(true)
            }
        }

        window.addEventListener('beforeinstallprompt', beforeInstallPromptHandler)

        // Trigger for iOS if not hidden/standalone
        if (isIOS && !Cookies.get(HIDE_INSTALL_PROMPT_COOKIE) && !isStandalone) {
            setShowDialog(true)
        }

        return () => {
            window.removeEventListener('beforeinstallprompt', beforeInstallPromptHandler)
        }
    }, [isIOS, isStandalone]) // Re-run if isIOS/isStandalone changes

    // Effect to control dialog visibility based on state
    useEffect(() => {
        if (showDialog && dialogRef.current) {
            dialogRef.current.showModal()
        } else if (!showDialog && dialogRef.current) {
            dialogRef.current.close()
        }
    }, [showDialog])

    const handleInstallClick = async () => {
        if (!installPromptEvent) return
        installPromptEvent.prompt()
        const { outcome } = await installPromptEvent.userChoice
        console.log(`PWA Install outcome: ${outcome}`)
        setInstallPromptEvent(null)
        setShowDialog(false)
    }

    const handleDismissClick = async () => {
        setShowDialog(false)
        setInstallPromptEvent(null)
        // Set cookie client-side immediately
        Cookies.set(HIDE_INSTALL_PROMPT_COOKIE, 'true', { expires: 30 }) // Expires in 30 days

        // Optional: Call Server Action if still needed for other purposes
        try {
            await dismissInstallPrompt()
        } catch (error) {
            console.error('Server action dismissInstallPrompt failed:', error)
        }
    }

    // Don't render anything if conditions aren't met
    if (isStandalone || (!isIOS && !installPromptEvent && !showDialog)) {
        return null
    }

    return (
        <dialog ref={dialogRef} className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                {isIOS ? (
                    <>
                        <h3 className="text-lg font-bold">Install Yellowdog App</h3>
                        <p className="py-4 text-sm">
                            To install this app on your iPhone or iPad, tap the share icon
                            {/* Share Icon SVG */}
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
                            {/* Plus Icon SVG */}
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
                        <div className="modal-action">
                            <button className="btn btn-sm btn-ghost" onClick={handleDismissClick}>
                                Dismiss
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <h3 className="text-lg font-bold">Install Yellowdog App?</h3>
                        <p className="py-4 text-sm">Add Yellowdog to your home screen for quick access.</p>
                        <div className="modal-action">
                            <button className="btn btn-sm btn-ghost" onClick={handleDismissClick}>
                                No thanks!
                            </button>
                            <button
                                className="btn btn-sm btn-primary"
                                onClick={handleInstallClick}
                                disabled={!installPromptEvent}
                            >
                                Install
                            </button>
                        </div>
                    </>
                )}
            </div>
            {/* Optional: Click outside to close for non-iOS */}
            {!isIOS && (
                <form method="dialog" className="modal-backdrop">
                    <button onClick={() => setShowDialog(false)}>close</button>
                </form>
            )}
        </dialog>
    )
}
