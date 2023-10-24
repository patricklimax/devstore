import { Badge } from '@/components/ui/badge';
import ProductItem from '@/components/ui/productItem';
import { CATEGORIES_ICON } from '@/constants/categoriesIcon';
import { computeProductTotalPrice } from '@/helpers/product';
import { prismaClient } from '@/lib/prisma';

const ProductsOfCategories = async ({ params }: any) => {
  const categories = await prismaClient.category.findFirst({
    where: {
        slug: params.slug
    },
    include: {
        products: true
    }
  })

  if(!categories) return null

  return (
    <div className='pt-4 pb-8 flex flex-col gap-4'>
      <div className='flex flex-col px-4 md:px-0'>
        <Badge className='w-fit gap-2 text-base uppercase rounded border-primary py-1.5' variant={'outline'}>
          <p className='text-primary'>
            {CATEGORIES_ICON[params.slug as keyof typeof CATEGORIES_ICON]}
          </p>
          {categories.name}
        </Badge>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-6 gap-8 px-4 md:px-0'>
        {categories.products.map(product =>
          <ProductItem key={product.id} product={computeProductTotalPrice(product)} /> )}
      </div>

    </div>
  );
}

export default ProductsOfCategories;