import { Badge } from '@/components/ui/badge';
import { prismaClient } from '@/lib/prisma';
import { LayoutGridIcon } from 'lucide-react';
import CategoriesItem from './components/categoriesItem';

const CategoriesPage = async () => {
  const categories = await prismaClient.category.findMany({})

  return (
    <div className='py-4 flex flex-col gap-4 w-full md:max-w-[70rem] mx-auto'>
      <div className='flex flex-col px-4 md:px-0'>
        <Badge className='w-fit gap-2 text-base uppercase rounded border-primary py-1.5' variant={'outline'}>
          <p className='text-primary'>
            <LayoutGridIcon size={16} />
          </p>
          Categorias
        </Badge>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-3 gap-4 px-4 md:px-0'>
        {categories.map((category) =>
          <CategoriesItem key={category.id} category={category} />)}
      </div>
    </div>
  );
}

export default CategoriesPage;