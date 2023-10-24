import Image from 'next/image'
import Categories from './components/categories'
import { prismaClient } from '@/lib/prisma'
import ProductList from '../../components/ui/productList'
import SectionTitle from '@/components/ui/sectionTitle'
import PromoBanner from './components/promoBanner'

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0
      }
    }
  })

  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: 'mouses'
      }
    }
  })

  const headphones = await prismaClient.product.findMany({
    where: {
      category: {
        slug: 'headphones'
      }
    }
  })
  
  return (
    <main className='py-4'>
      <div className='flex flex-col md:flex-row gap-4 px-4 md:px-0'>
        <Categories />
        <div className='w-full'>
          <PromoBanner
            src={'/bannerHome01.svg'}

            alt={'Até 55% de desconto esse mês!'} />
        </div>
      </div>

      <div>
        <SectionTitle>Ofertas</SectionTitle>
        <ProductList products={deals} />
      </div>

      <div className='p-4 md:px-0'>
        <PromoBanner
          src={'/bannerHome02.svg'}
          alt={'Até 55% de desconto em mouses!'} />
      </div>

      <div>
        <SectionTitle>Mouses</SectionTitle>
        <ProductList products={mouses} />
      </div>

      <div className='p-4 md:px-0'>
        <PromoBanner
          src={'/bannerHome03.svg'}
          alt={'Até 20% de desconto em fones!'} />
      </div>

      <div>
        <SectionTitle>Fones & HeadSet</SectionTitle>
        <ProductList products={headphones} />
      </div>

    </main>
  )
}
