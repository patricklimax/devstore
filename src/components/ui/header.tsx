import { MenuIcon, ShoppingCartIcon } from 'lucide-react';
import { Button } from './button';
import { Card } from './card';

const Header = () => {
  return ( 
    <Card className='flex items-center justify-between p-4'>
      <Button size='icon' variant='outline' className='rounded'>
        <MenuIcon />
      </Button>

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