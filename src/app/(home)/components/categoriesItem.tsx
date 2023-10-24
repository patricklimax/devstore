import { Badge } from '@/components/ui/badge';
import { CATEGORIES_ICON } from '@/constants/categoriesIcon';
import { Category } from '@prisma/client';
import Link from 'next/link';

interface CategoriesItemProps {
  category: Category;
}

const CategoriesItem = ({ category }: CategoriesItemProps) => {

  return (
    <Link href={`/categories/products/${category.slug}`} className='flex items-center'>
      <Badge variant={'outline'} className='py-3 flex justify-center items-center gap-2 rounded w-full'>
        {CATEGORIES_ICON[category.slug as keyof typeof CATEGORIES_ICON]}
        <span className='font-semibold text-sm'>{category.name}</span>
      </Badge>
    </Link>
  );
}

export default CategoriesItem;

