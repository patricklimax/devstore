import { Category } from '@prisma/client';
import Image from 'next/image'

interface CategoriesItemProps {
  category: Category
}

const CategoriesItem = ({ category }: CategoriesItemProps) => {
  return ( 
    <div className='flex flex-col px-4 md:px-0'>
      <div
        className='w-full h-[150px] bg-gradient-to-tr from-primary to-primary/40 rounded-t flex items-center justify-center hover:bg-gradient-to-tl'>
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
      
      <div className='bg-accent py-4 rounded-b'>
        <p className='text-sm font-semibold text-center'>{category.name}</p>
      </div>

    </div>
   );
}
 
export default CategoriesItem;