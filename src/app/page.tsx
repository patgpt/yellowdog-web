import Image from 'next/image'

export default function Home() {
    return (
        <div className="glowing-primary-bg flex h-screen w-full flex-col items-center justify-center">
            <div className="flex flex-grow items-center justify-center">
                <Image className="m-auto" src="/image.png" alt="Hero" width={400} height={400} />
            </div>
            <div className="mb-4">{/* <PushNotificationManager /> */}</div>
        </div>
    )
}
