import { Badge } from '@/components/ui/badge';
import { CATEGORIES_ICON } from '@/constants/categoriesIcon';
import { Category } from '@prisma/client';

interface CategoriesItemProps {
  category: Category;
}

const CategoriesItem = ({ category }: CategoriesItemProps) => {
  

  return (
    <Badge variant={'outline'} className='py-2 md:py-0 flex justify-center items-center gap-2 rounded'>
      {CATEGORIES_ICON[category.slug as keyof typeof CATEGORIES_ICON]}
      <span className='font-semibold text-sm'>{category.name}</span>
    </Badge>
  );
}

export default CategoriesItem;

