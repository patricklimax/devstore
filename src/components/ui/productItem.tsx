import { ProductWithTotalPrice } from '@/helpers/product';
import Image from 'next/image'
import Link from 'next/link';
import DiscountBadge from './discount-badge';

interface ProductItemProps {
  product: ProductWithTotalPrice;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <Link href={`/categories/products/product/${product.slug}`}>
      <div className='flex flex-col items-center justify-between w-full mb-4'>
        <div className='bg-accent rounded-t h-[170px] w-[190px] max-w-full flex items-center justify-center relative'>
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
            <DiscountBadge className='absolute left-2 top-2'>
              {product.discountPercentage}
            </DiscountBadge>
          }
        </div>

        <div className='max-w-full p-2 bg-popover w-[190px] rounded-b'>
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
    </Link>
  );
}

export default ProductItem;