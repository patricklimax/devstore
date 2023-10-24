import Image from 'next/image'
import Categories from './components/categories'
import { prismaClient } from '@/lib/prisma'
import ProductList from './components/productList'
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
  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: 'keyboards'
      }
    }
  })
  const mousepads = await prismaClient.product.findMany({
    where: {
      category: {
        slug: 'mousepads'
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
  const speakers = await prismaClient.product.findMany({
    where: {
      category: {
        slug: 'speakers'
      }
    }
  })
  
  return (
    <main>
      <div className='flex flex-col md:flex-row gap-4 py-4'>
        <Categories />
        <PromoBanner
          src={'/bannerHome01.svg'}
          alt={'Até 55% de desconto esse mês!'} />
      </div>

      <div>
        <SectionTitle>Ofertas</SectionTitle>
        <ProductList products={deals} />
      </div>

      <div className='py-4'>
        <PromoBanner
          src={'/bannerHome02.svg'}
          alt={'Até 55% de desconto em mouses!'} />
      </div>

      <div>
        <SectionTitle>Mouses</SectionTitle>
        <ProductList products={mouses} />
      </div>

      <div className='py-4'>
        <PromoBanner
          src={'/bannerHome03.svg'}
          alt={'Até 20% de desconto em fones!'} />
      </div>

      <div>
        <SectionTitle>Fones & HeadSet</SectionTitle>
        <ProductList products={headphones} />
      </div>

      <div>
        <SectionTitle>Teclados</SectionTitle>
        <ProductList products={keyboards} />
      </div>

      <div>
        <SectionTitle>Mouse Pads</SectionTitle>
        <ProductList products={mousepads} />
      </div>

      <div>
        <SectionTitle>Monitores</SectionTitle>
        <ProductList products={monitors} />
      </div>

      <div>
        <SectionTitle>Speakers</SectionTitle>
        <ProductList products={speakers} />
      </div>
    </main>
  )
}
