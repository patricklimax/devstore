import { ShoppingCartIcon } from 'lucide-react';
import { Badge } from './badge';
import { useContext } from 'react';
import { CartContext } from '@/providers/cart';
import { computeProductTotalPrice } from '@/helpers/product';
import CartItem from './cartItem';
import { Separator } from './separator';
import { ScrollArea } from './scroll-area';
import { Button } from './button';
import Link from 'next/link';
import { SheetClose } from './sheet';
import { createCheckout } from '@/actions/checkout';
import { loadStripe } from '@stripe/stripe-js';

const Cart = () => {
  const { products, subtotal, total, totalDiscount } = useContext(CartContext);

  const hadleFinishPurchaseClick = async () => {
    const chechout = await createCheckout(products)

    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)

    stripe?.redirectToCheckout({
      sessionId: chechout.id
    })
  }

  return (
    <div className='flex flex-col gap-4 h-full'>
      <Badge className='w-fit gap-2 text-base uppercase rounded py-1.5' variant={'outline'}>
        <p className='text-primary'>
          <ShoppingCartIcon size={16} />
        </p>
        Carrinho
      </Badge>

      {/* rendirizando produtos */}
      <ScrollArea className='flex-1 border p-2 pr-2.5 relative'>
        <div className='flex flex-col gap-4'>
          {products.length > 0 ?
            products.map((product) =>
              <CartItem
                key={product.id}
                product={computeProductTotalPrice(product as any) as any} />)
            :
            <div
              className='flex flex-col gap-4 w-full items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 '>
              <p>Seu carrinho está vazio :(</p>
              <p className='text-primary'>VAMOS FAZER COMPRAS?</p>

              <SheetClose asChild>
                <Link href={"/categories"}>
                  <Button className='rounded mt-10'>
                    Ir para Categorias
                  </Button>
                </Link>
              </SheetClose>
            </div>
          }
        </div>
      </ScrollArea>

      {products.length > 0 &&
        <>
          <div className='flex flex-col gap-4 text-sm'>
            <Separator />
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

          <div>
            <Button
            onClick={hadleFinishPurchaseClick}
            className='uppercase rounded font-bold w-full'>
              Finalizar compra
            </Button>
          </div>
        </>
      }

    </div >
  );
}

export default Cart;