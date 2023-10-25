import { ShoppingCartIcon } from 'lucide-react';
import { Badge } from './badge';
import { useContext } from 'react';
import { CartContext } from '@/providers/cart';
import { computeProductTotalPrice } from '@/helpers/product';
import CartItem from './cartItem';
import { Separator } from './separator';

const Cart = () => {
  const { products, subtotal, total, totalDiscount } = useContext(CartContext);
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
        {products.length > 0 ?
          products.map((product) =>
            <CartItem
              key={product.id}
              product={computeProductTotalPrice(product as any) as any} />)
          :
          <div className='flex flex-col gap-4 items-center pt-10'>
            <p>Seu carrinho está vazio :(</p>
            <p className='text-primary'>VAMOS FAZER COMPRAS?</p>
          </div>
        }
      </div>

      <div className='flex flex-col gap-4'>
        <div className='flex items-center justify-between'>
          <p>Subtotal</p>
          <p>{subtotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
        </div>

        <Separator />
        <div className='flex items-center justify-between'>
          <p>Entrega</p>
          <p>Grátis</p>
        </div>

        <Separator />
        <div className='flex items-center justify-between'>
          <p>Descontos</p>
          <p>-{totalDiscount.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
        </div>

        <Separator />
        <div className='flex items-center justify-between'>
          <p>Total</p>
          <p>{total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
        </div>
        <Separator />

      </div>
    </div>
  );
}

export default Cart;