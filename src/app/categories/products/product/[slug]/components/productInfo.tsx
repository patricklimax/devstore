'use client'
import { ProductWithTotalPrice } from '@/helpers/product'
import { Badge } from '@/components/ui/badge';
import { ArrowDownIcon, MinusIcon, PlusIcon, TruckIcon } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface ProductInfoProps {
  product: Pick<ProductWithTotalPrice,
    'basePrice'
    | 'description'
    | 'discountPercentage'
    | 'totalPrice'
    | 'name'>
}

const ProductInfo = ({ product: {
  name, basePrice, description, discountPercentage, totalPrice }
}: ProductInfoProps) => {

  const [quantity, setQuantity] = useState(1);

  const handleDecreaseQuantityClick = () => {
    setQuantity((prev) => prev === 1 ? prev : prev - 1);
  }

  const handleIncreaseQuantityClick = () => {
    setQuantity((prev) => prev + 1);
  }



  return (
    <div className='flex flex-col'>
      <p className='text-lg'>{name}</p>

      <div className='flex items-center gap-2'>
        <p className='text-xl font-semibold'>
          {totalPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
        </p>

        {discountPercentage > 0 &&
          <Badge className='px-2 py-1'>
            <ArrowDownIcon size={14} />
            {discountPercentage}%
          </Badge>
        }

        {discountPercentage > 0 &&
          <p className='line-through opacity-75'>
            R$ {Number(basePrice).toFixed(2)}
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
        <p className='text-sm opacity-75 text-justify'>{description}</p>
      </div>

      <Button className='mt-8 rounded uppercase font-semibold'>
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