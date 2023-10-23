import { HomeIcon, ListOrderedIcon, LogInIcon, LogOutIcon, MenuIcon, PercentIcon, ShoppingCartIcon } from 'lucide-react';
import { Button } from './button';
import { Card } from './card';
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from './sheet';

const Header = () => {
  return ( 
    <Card className='flex items-center justify-between p-4'>
      <Sheet>
        <SheetTrigger asChild>
          <Button size='icon' variant='outline' className='rounded'>
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent side='left'>
          <SheetHeader className='text-left text-lg font-semibold'>
            Menu
          </SheetHeader>

          <div className='py-4 flex flex-col gap-4'>
            <Button variant='outline' className='w-full justify-start rounded gap-2 items-center'>
              <LogInIcon size={16}/>
              Fazer login
            </Button>

            <Button variant='outline' className='w-full justify-start rounded gap-2 items-center'>
              <HomeIcon size={16} />
              Home
            </Button>

            <Button variant='outline' className='w-full justify-start rounded gap-2 items-center'>
              <PercentIcon size={16} />
              Ofertas
            </Button>

            <Button variant='outline' className='w-full justify-start rounded gap-2 items-center'>
              <LogOutIcon size={16} />
              Fazer Logout
            </Button>

            <Button variant='outline' className='w-full justify-start rounded gap-2 items-center'>
              <ListOrderedIcon size={16} />
              Catálogo
            </Button>

          </div>


          

        </SheetContent>
      </Sheet>

      

      <h1 className='font-semibold text-xl'>
        <span className='text-primary'>Developer</span> Store
      </h1>

      <Button size='icon' variant='outline' className='rounded'>
        <ShoppingCartIcon />
      </Button>
    </Card>
   );
}
 
export default Header;