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

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: 'keyboards'
      }
    }
  })

  const monitors = await prismaClient.product.findMany({
    where: {
      category: {
        slug: 'monitors'
      }
    }
  })

  return (
    <main className='py-4 md:pt-0 flex flex-col gap-4'>
      <div className='md:flex hidden'>
        <PromoBanner
          src={'/bannerHomeDesktop.svg'}
          alt={'Até 55% de desconto esse mês!'} />
      </div>
      <div className='flex px-4 pd:mx-0 md:hidden'>
        <PromoBanner
          src={'/bannerHome01.svg'}
          alt={'Até 55% de desconto esse mês!'} />
      </div>

      <div className='w-full md:max-w-[70rem] mx-auto'>
        <div className='px-4 md:px-0'>
          <Categories />
        </div>

        <div>
          <SectionTitle>Ofertas</SectionTitle>
          <ProductList products={deals} />
        </div>

        <div className='flex flex-col md:flex-row gap-4 mt-4 px-4 md:px-0'>
          <div className='flex-1'>
            <PromoBanner
              src={'/bannerHome02.svg'}
              alt={'Até 55% de desconto em mouses!'} />
          </div>

          <div className='flex-1'>
            <PromoBanner
              src={'/bannerHome03.svg'}
              alt={'Até 20% de desconto em fones!'} />
          </div>
        </div>

        <div>
          <SectionTitle>Teclados</SectionTitle>
          <ProductList products={keyboards} />
        </div>

        <div>
          <SectionTitle>Monitores</SectionTitle>
          <ProductList products={monitors} />
        </div>
      </div>
      <div>
        <PromoBanner
          src={'/bannerFreteGratis.svg'}
          alt={'Frete Grátis para todo Brasil!'} />
      </div>
    </main>
  )
}
