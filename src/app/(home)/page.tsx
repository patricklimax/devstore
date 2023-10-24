"use client"

import Image from 'next/image'
import Categories from './components/categories'

export default function Home() {

  return (
    <main>
      <div className='flex flex-col md:flex-row gap-4 py-4'>
        <Categories />
        <Image
          src={'/bannerHome01.svg'}
          alt={'Até 55% de desconto esse mês!'}
          height={0}
          width={0}
          sizes='100vw'
          className='h-auto w-full'
        />
      </div>

    </main>
  )
}
