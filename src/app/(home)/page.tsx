"use client"

import Image from 'next/image'

export default function Home() {

  return (
    <main>
      <Image
        src={'/bannerHome01.svg'}
        alt={'Até 55% de desconto esse mês!'}
        height={0}
        width={0}
        sizes='100vw'
        className='h-auto w-full'
      />
    </main>
  )
}
