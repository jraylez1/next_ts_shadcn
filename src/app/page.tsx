import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Card from './Card'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card />
      <Image src="/images/image.jpg" alt="art" width={300} height={300} quality={100} />
    </main>
  )
}
