'use client'
import { ProductWithTotalPrice } from '@/helpers/product'
import { MinusIcon, PlusIcon, TruckIcon } from 'lucide-react';
import { useContext, useState } from 'react';
import { Button } from '@/components/ui/button';
import DiscountBadge from '@/components/ui/discount-badge';
import { CartContext } from '@/providers/cart';

interface ProductInfoProps {
  product: ProductWithTotalPrice
}

const ProductInfo = ({ product }: ProductInfoProps) => {

  const [quantity, setQuantity] = useState(1);

  const { addProductToCart } = useContext(CartContext)

  const handleDecreaseQuantityClick = () => {
    setQuantity((prev) => prev === 1 ? prev : prev - 1);
  }

  const handleIncreaseQuantityClick = () => {
    setQuantity((prev) => prev + 1);
  }

  const handleAddToCartClick = () => {
    addProductToCart({ ...product, quantity })
  }

  return (
    <div className='flex flex-col'>
      <p className='text-lg'>{product.name}</p>

      <div className='flex items-center gap-2'>
        <p className='text-xl font-semibold'>
          {product.totalPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
        </p>

        {product.discountPercentage > 0 &&
          <DiscountBadge>{product.discountPercentage}</DiscountBadge>
        }

        {product.discountPercentage > 0 &&
          <p className='line-through opacity-75'>
            R$ {Number(product.basePrice).toFixed(2)}
          </p>
        }
      </div>

      <div className='flex items-center justify-between py-8'>
        <div className='flex items-center gap-2'>
          <Button
            onClick={handleDecreaseQuantityClick}
            className='rounded'
            size={'icon'}
            variant={'outline'}>
            <MinusIcon size={16} />
          </Button>

          <span className='bg-accent h-10 w-10 max-h-full flex items-center justify-center rounded'>
            {quantity}
          </span>

          <Button
            onClick={handleIncreaseQuantityClick}
            className='rounded'
            size={'icon'}
            variant={'outline'}>
            <PlusIcon size={16} />
          </Button>
        </div>
        <Button className='rounded uppercase font-semibold'>
          Adiconar ao Carrinho
        </Button>
      </div>

      <div className='flex flex-col gap-2'>
        <h1 className='font-semibold uppercase'>Descrição</h1>
        <p className='text-sm opacity-75 text-justify'>{product.description}</p>
      </div>

      <Button
        onClick={handleAddToCartClick}
        className='mt-8 rounded uppercase font-semibold'>
        Adiconar ao Carrinho
      </Button>

      <div className='bg-accent flex justify-between items-center p-4 mt-8 rounded'>
        <div className='flex items-center gap-2'>
          <TruckIcon />

          <div className='flex flex-col'>
            <p className='text-xs'>
              Entrega via
              <span className='font-semibold text-primary'>
                DEVPACKET®
              </span>
            </p>

            <p className='text-xs'>
              Envio para
              <span className='font-semibold text-primary'>
                todo BRASIL
              </span>
            </p>
          </div>
        </div>

        <div className='text-font-semibold'>
          Frete Grátis
        </div>
      </div>

    </div>
  );
}

export default ProductInfo;