import { Badge } from '@/components/ui/badge';
import ProductItem from '@/components/ui/productItem';
import { computeProductTotalPrice } from '@/helpers/product';
import { prismaClient } from '@/lib/prisma';
import { PercentIcon } from 'lucide-react';

const DealsPage = async () => {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0
      }
    }
  })
  return (
    <div className='py-4 flex flex-col gap-4 w-full md:max-w-[70rem] mx-auto'>
      <div className='flex flex-col px-4 md:px-0'>
        <Badge className='w-fit gap-2 text-base uppercase rounded border-primary py-1.5' variant={'outline'}>
          <p className='text-primary'>
            <PercentIcon size={16} />
          </p>
          Ofertas
        </Badge>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-6 gap-4 px-4 md:px-0'>
        {deals.map(product =>
          <ProductItem key={product.id} product={computeProductTotalPrice(product)} />)}
      </div>
    </div>
  );
}

export default DealsPage;