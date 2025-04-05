// logo.tsx

import Image from 'next/image'

export default function Logo({ logo }: { logo: string }) {
    return <Image src={logo} alt="logo" width={100} height={100} />
}
