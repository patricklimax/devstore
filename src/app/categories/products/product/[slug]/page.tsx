import { prismaClient } from '@/lib/prisma';
import ProductImages from './components/productImages';
import { computeProductTotalPrice } from '@/helpers/product';
import ProductInfo from './components/productInfo';
import ProductList from '@/components/ui/productList';
import SectionTitle from '@/components/ui/sectionTitle';


interface ProductDetailsPageProps {
  params: {
    slug: string;
  }
}

const ProductDetailsPage = async ({ params: { slug } }: ProductDetailsPageProps) => {
  const product = await prismaClient.product.findFirst({
    where: {
      slug: slug,
    },
    include: {
      category: {
        include: {
          products: {
            where: {
              slug: {
                not: slug
              }
            }
          }
        }
      }
    },
  })

  if (!product) return null;

  return (
    <div className='py-4 flex flex-col w-full md:max-w-[70rem] mx-auto'>
      <div className="md:flex md:gap-4">
        <div className='flex-1 h-auto'>
          <ProductImages imageUrls={product.imageUrls} name={product.name} />
        </div>

        <div className='flex-1 h-auto'>
          <ProductInfo product={computeProductTotalPrice(product)} />
        </div>
      </div>

      <div className='md:mt-4'>
        <SectionTitle>Produtos Recomendados</SectionTitle>
        <ProductList products={product.category.products} />
      </div>
    </div>
  );
}

export default ProductDetailsPage;
;