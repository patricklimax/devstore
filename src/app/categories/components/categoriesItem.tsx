import { Category } from '@prisma/client';
import Image from 'next/image'
import Link from 'next/link';

interface CategoriesItemProps {
  category: Category
}

const CategoriesItem = ({ category }: CategoriesItemProps) => {
  return ( 
    <Link href={`/categories/products/${category.slug}`}>
      <div className='flex flex-col'>
        <div
          className='h-44 w-44 min-w-full bg-gradient-to-tr from-primary to-primary/40 rounded-t flex items-center justify-center hover:bg-gradient-to-tl'>
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

        <div className='bg-accent rounded-b w-44 h-[3.2rem] min-w-full flex items-center justify-center'>
          <p className='text-sm font-semibold text-center'>{category.name}</p>
        </div>
      </div>
    </Link>
   );
}
 
export default CategoriesItem;