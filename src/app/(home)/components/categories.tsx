import { prismaClient } from '@/lib/prisma';
import CategoriesItem from './categoriesItem';

const Categories = async () => {
  const categories = await prismaClient.category.findMany();
   
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2'>
      {categories.map((category) => 
      <CategoriesItem key={category.id} category={category} />)}
    </div>
  );
}
 
export default Categories;