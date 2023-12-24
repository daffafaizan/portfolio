import Description from '@/components/description'
import Intro from '@/components/intro'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col items-center p-4">
      <Intro />
      <Description />
    </main>
  )
}
