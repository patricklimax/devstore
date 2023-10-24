import { ShoppingCartIcon } from 'lucide-react';
import { Badge } from './badge';
import { useContext } from 'react';
import { CartContext } from '@/providers/cart';
import { computeProductTotalPrice } from '@/helpers/product';
import CartItem from './cartItem';

const Cart = () => {
  const { products } = useContext(CartContext);
  return (
    <div className='flex flex-col gap-4'>
      <Badge className='w-fit gap-2 text-base uppercase rounded py-1.5' variant={'outline'}>
        <p className='text-primary'>
          <ShoppingCartIcon size={16} />
        </p>
        Carrinho
      </Badge>

      {/* rendirizando produtos */}
      <div className='flex flex-col gap-4'>
        {products.map((product) =>
          <CartItem key={product.id} product={computeProductTotalPrice(product as any) as any} />
        )}
      </div>
    </div>
  );
}

export default Cart;