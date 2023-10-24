import { Heading1, ShoppingCartIcon } from 'lucide-react';
import { Badge } from './badge';
import { useContext } from 'react';
import { CartContext } from '@/providers/cart';

const Cart = () => {
  const {products } = useContext(CartContext);
  return (
    <div>
      <Badge className='w-fit gap-2 text-base uppercase rounded py-1.5' variant={'outline'}>
        <p className='text-primary'>
          <ShoppingCartIcon size={16} />
        </p>
        Carrinho
      </Badge>

      {/* rendirizando produtos */}
      {products.map((product) =>
        <h1 key={product.id}>{product.name}</h1>
      )}
    </div>
  );
}

export default Cart;