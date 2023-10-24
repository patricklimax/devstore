import { ProductWithTotalPrice } from '@/helpers/product';
import Image from 'next/image'
import { Badge } from './badge';
import { ArrowDownIcon } from 'lucide-react';

interface ProductItemProps {
  product: ProductWithTotalPrice;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className='flex flex-col items-center justify-between w-full'>
      <div className='bg-accent rounded-t h-[170px] w-[170px] max-w-full flex items-center justify-center relative'>
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

      <div className='max-w-full p-2 bg-popover w-[170px] rounded-b'>
        <p className='text-sm truncate'>{product.name}</p>

        <div className='flex items-center justify-between'>
          {product.discountPercentage > 0 ?
            <>
              <p className='font-semibold text-xs'>
                {(product.totalPrice).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
              </p>
              <p className='font-semibold text-xs line-through opacity-75'>
                {Number(product.basePrice).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
              </p>
            </>
            :
            <p className='font-semibold text-xs'>
              {Number(product.basePrice).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
            </p>
          }
        </div>
      </div>


    </div>
  );
}

export default ProductItem;