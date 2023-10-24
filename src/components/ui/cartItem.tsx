import { CartContext, CartProduct } from '@/providers/cart';
import Image from 'next/image'
import { Button } from './button';
import { MinusIcon, PlusIcon, TrashIcon } from 'lucide-react';
import { useContext } from 'react';

interface CartItemProps {
  product: CartProduct;
}

const CartItem = ({ product }: CartItemProps) => {
  const {
    decreaseProductQuantity,
    increaseProductQuantity,
    removeProductFromCart } = useContext(CartContext)

  const handleDecreaseProductQuantity = () => {
    decreaseProductQuantity(product.id)
  }

  const handleIncreaseProductQuantity = () => {
    increaseProductQuantity(product.id)
  }

  const handleRemoveProductFromCart = () => {
    removeProductFromCart(product.id)
  }

  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center gap-3'>
        {/* foto e nome */}
        <div className='bg-accent flex items-center justify-center rounded h-[77px] w-[77px]'>
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
        </div>
        <div className='flex flex-col'>
          <p className='text-xs'>{product.name}</p>

          <div className='flex items-center gap-2'>
            <p className='text-sm font-semibold'>R$ {product.totalPrice.toFixed(2)}</p>

            {product.discountPercentage > 0 &&
              <p className='opacity-75 line-through text-xs'>
                R$ {Number(product.basePrice).toFixed(2)}
              </p>}
          </div>

          <div className='flex items-center gap-2'>
            <Button
              onClick={handleDecreaseProductQuantity}
              className='rounded w-8 h-8'
              size={'icon'}
              variant={'outline'}>
              <MinusIcon size={12} />
            </Button>

            <span className='bg-accent h-8 w-8 max-h-full flex items-center justify-center rounded'>
              {product.quantity}
            </span>

            <Button
              onClick={handleIncreaseProductQuantity}
              className='rounded w-8 h-8'
              size={'icon'}
              variant={'outline'}>
              <PlusIcon size={12} />
            </Button>
          </div>
        </div>
      </div>

      <Button
        onClick={handleRemoveProductFromCart}
        size={'icon'}
        variant={'destructive'}
        className='rounded'>
        <TrashIcon size={16} />
      </Button>
    </div>
  );
}

export default CartItem;