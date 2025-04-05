import Image from 'next/image'

export default function Home() {
    return (
        <div className="glowing-primary-bg flex h-screen w-full items-center justify-center">
            <Image className="m-auto" src="/image.png" alt="Hero" width={400} height={400} />
        </div>
    )
}
