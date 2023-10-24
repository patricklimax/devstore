import { prismaClient } from '@/lib/prisma';
import ProductImages from './components/productImages';


interface ProductDetailsPageProps {
  params: {
    slug: string;
  }
}

const ProductDetailsPage = async ({ params: { slug } }: ProductDetailsPageProps) => {
  const product = await prismaClient.product.findFirst({
    where: {
      slug: slug,
    }
  })

  if (!product) return null;

  return (
    <div className='pt-4 pb-8'>
      <div>
        <ProductImages imageUrls={product.imageUrls} name={product.name } />
      </div>
    </div>
  );
}

export default ProductDetailsPage;
;