"use client"

import { HomeIcon, LayoutGridIcon, LogInIcon, LogOutIcon, MenuIcon, PercentIcon, ShoppingCartIcon } from 'lucide-react';
import { Button } from './button';
import { Card } from './card';
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from './sheet';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Avatar } from './avatar';
import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import Link from 'next/link';
import Cart from './cart';
import { Separator } from './separator';

const Header = () => {
  const { status, data } = useSession();

  const handleLogInClick = async () => {
    await signIn()
  }

  const handleLogOutClick = async () => {
    await signOut()
  }

  return (
    <Card className='flex items-center justify-between p-4 rounded-b'>
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

          {status === 'authenticated' && data?.user &&
            <div className='flex items-center gap-4 p-4 px-2 rounded'>
              <Avatar>
                <AvatarFallback>
                  {data.user.name?.[0].toUpperCase()}
                </AvatarFallback>

                {data.user.image && (<AvatarImage src={data.user.image} />)}
              </Avatar>

              <p className='font-semibold'>{data.user.name}</p>
            </div>
          }

          <Separator />
          <div className='py-4 flex flex-col gap-4'>
            {status === 'unauthenticated' &&
              <Button
                onClick={handleLogInClick}
                variant='outline'
                className='w-full justify-start rounded gap-2 items-center'>
                <LogInIcon size={16} />
                Fazer login
              </Button>
            }

            {status === 'authenticated' &&
              <Button
                onClick={handleLogOutClick}
                variant='outline'
                className='w-full justify-start rounded gap-2 items-center'>
                <LogOutIcon size={16} />
                Fazer Logout
              </Button>
            }
            <SheetClose asChild>
              <Link href={"/"}>
                <Button variant='outline' className='w-full justify-start rounded gap-2 items-center'>
                  <HomeIcon size={16} />
                  Home
                </Button>
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link href={'/deals'}>
                <Button variant='outline' className='w-full justify-start rounded gap-2 items-center'>
                  <PercentIcon size={16} />
                  Ofertas
                </Button>
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link href={"/categories"}>
                <Button variant='outline' className='w-full justify-start rounded gap-2 items-center'>
                  <LayoutGridIcon size={16} />
                  Categorias
                </Button>
              </Link>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>

      <Link href={"/"}>
        <h1 className='font-semibold text-xl'>
          <span className='text-primary'>Developer</span> Store
        </h1>
      </Link>

      <Sheet>
        <SheetTrigger asChild>
          <Button size='icon' variant='outline' className='rounded'>
            <ShoppingCartIcon />
          </Button>
        </SheetTrigger>

        <SheetContent side='right' className='w-11/12'>
          <Cart />
        </SheetContent>
      </Sheet>
    </Card>
  );
}

export default Header;