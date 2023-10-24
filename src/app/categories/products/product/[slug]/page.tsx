import { prismaClient } from '@/lib/prisma';

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
      <div className='flex flex-col md:flex-row gap-4 px-4 md:px-0'>
        {product.name}
      </div>
    </div>
  );
}

export default ProductDetailsPage;
;