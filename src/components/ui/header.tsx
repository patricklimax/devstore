"use client"

import { HomeIcon, LayoutGridIcon, LogInIcon, LogOutIcon, MenuIcon, PercentIcon, ShoppingCartIcon, UserIcon } from 'lucide-react';
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
    <Card className='flex items-center justify-between p-4 py-6 rounded-b'>
      <div className='flex md:hidden'>
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
                <Avatar className='rounded bg-accent p-2'>
                  <AvatarFallback className='flex justify-center items-center text-lg w-full'>
                    {data.user.name?.[0].toUpperCase()}
                  </AvatarFallback>

                  {data.user.image && (
                    <AvatarImage src={data.user.image} />
                  )}

                </Avatar>

                <p className='leading-none capitalize font-semibold'>
                  Olá, <span className='text-primary'>{data.user.name?.split(' ')[0]}</span> :)
                </p>
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
      </div>
      <Link href={"/"}>
        <h1 className='font-semibold text-xl'>
          <span className='text-primary'>Developer</span> Store
        </h1>
      </Link>

      {/*  adicionar redirecionamento */}
      <div className='hidden md:flex md:items-center gap-4 h-1/2'>
        <Link href={'/'}>Home</Link>
        <Separator orientation='vertical' className='w-[2px]' />
        <Link href={'/categories'}>Categorias</Link>
        <Separator orientation='vertical' className='w-[2px]' />
        <Link href={'/deals'}>Ofertas</Link>
      </div>


      <div className='flex items-center justify-center gap-4'>
        <div className='hidden md:flex'>
          {status === 'authenticated' && data?.user &&
            <Button
              onClick={handleLogOutClick}
              variant='outline'
              className='p-0 pr-2 rounded gap-2'>
              <Avatar className='rounded h-full bg-accent'>
                <AvatarFallback className='flex justify-center items-center text-lg w-full'>
                  {data.user.name?.[0].toUpperCase()}
                </AvatarFallback>

                {data.user.image && (
                  <AvatarImage src={data.user.image} />
                )}
              </Avatar>
              <div className='text-[11px] flex flex-col gap-1'>
                <p className='leading-none capitalize font-semibold'>
                  Olá, <span className='text-primary'>{data.user.name?.split(' ')[0]}</span> :)
                </p>
                <p className='opacity-75 leading-none'>Sair</p>
              </div>
            </Button>
          }

          {status === 'unauthenticated' &&
            <Button
              onClick={handleLogInClick}
              variant='outline'
              className='p-0 pr-2 rounded gap-2'>
              <Avatar className='rounded flex items-center justify-center bg-accent'>
                <AvatarFallback>
                  <UserIcon />
                </AvatarFallback>
              </Avatar>
              Fazer Login
            </Button>
          }
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button size='icon' variant='outline' className='rounded p-2'>
              <ShoppingCartIcon />
            </Button>
          </SheetTrigger>

          <SheetContent side='right' className='w-11/12'>
            <Cart />
          </SheetContent>
        </Sheet>
      </div>
    </Card>
  );
}

export default Header;