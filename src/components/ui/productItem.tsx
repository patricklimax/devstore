import { ProductWithTotalPrice } from '@/helpers/product';
import Image from 'next/image'
import { Badge } from './badge';
import { ArrowDownIcon } from 'lucide-react';

interface ProductItemProps {
  product: ProductWithTotalPrice;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='bg-accent rounded h-[170px] w-[170px] flex items-center justify-center relative'>
        <Image
          src={product.imageUrls[0]}
          alt={product.name}
          height={0}
          width={0}
          sizes='100vw'
          className='h-auto w-full max-h-[70%] max-w-[85%]'
          style={{
            objectFit: 'contain'
          }}
        />
        {
          product.discountPercentage > 0 &&
          <Badge className='absolute left-2 top-2 px-2 py-1'>
            <ArrowDownIcon size={14} />
            {product.discountPercentage}%
          </Badge>
        }
      </div>


      <div className='w-[170px] px-2 mb-2'>
        <p className='text-sm truncate'>{product.name}</p>

        <div className='flex items-center justify-between'>
          {product.discountPercentage > 0 ?
            <>
              <p className='font-semibold text-sm'>
                R$ {product.totalPrice.toFixed(2)}
              </p>
              <p className='font-semibold text-xs line-through opacity-75'>
                R$ {Number(product.basePrice).toFixed(2)}
              </p>
            </>
            :
            <p className='font-semibold text-sm'>
              R$ {Number(product.basePrice).toFixed(2)}
            </p>
          }
        </div>
      </div>


    </div>
  );
}

export default ProductItem;