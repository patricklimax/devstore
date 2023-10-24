import { Badge } from '@/components/ui/badge';
import { Category } from '@prisma/client';
import {
  KeyboardIcon,
  MonitorIcon,
  HeadphonesIcon,
  SpeakerIcon,
  MouseIcon,
  MousePointerSquareIcon
} from 'lucide-react';

interface CategoriesItemProps {
  category: Category;
}

const CategoriesItem = ({ category }: CategoriesItemProps) => {
  const categoriesIcon = {
    keyboards: <KeyboardIcon size={16} />,
    monitors: <MonitorIcon size={16} />,
    headphones: < HeadphonesIcon size={16} />,
    mousepads: <MousePointerSquareIcon size={16} />,
    speakers: <SpeakerIcon size={16} />,
    mouses: <MouseIcon size={16} />
  }

  return (
    <Badge variant={'outline'} className='py-2 md:py-0 flex justify-center items-center gap-2 rounded'>
      {categoriesIcon[category.slug as keyof typeof categoriesIcon]}
      <span className='font-semibold text-sm'>{category.name}</span>
    </Badge>
  );
}

export default CategoriesItem;

