import { Category } from '@prisma/client';
import Image from 'next/image'
import Link from 'next/link';

interface CategoriesItemProps {
  category: Category
}

const CategoriesItem = ({ category }: CategoriesItemProps) => {
  return ( 
    <Link href={`/categories/products/${category.slug}`}>
      <div className='flex flex-col items-center justify-between w-full'>
        <div
          className='max-w-full h-[170px] w-[190px] bg-gradient-to-tr from-primary to-primary/40 rounded-t flex items-center justify-center hover:bg-gradient-to-tl'>
          <Image
            src={category.imageUrl}
            alt={category.name}
            height={0}
            width={0}
            sizes='100vw'
            className='h-auto w-full max-h-[70%] max-w-[85%]'
            style={{
              objectFit: 'contain'
            }}
          />
        </div>

        <div className='bg-accent py-4 rounded-b w-[190px] max-w-full'>
          <p className='text-sm font-semibold text-center'>{category.name}</p>
        </div>
      </div>
    </Link>
   );
}
 
export default CategoriesItem;