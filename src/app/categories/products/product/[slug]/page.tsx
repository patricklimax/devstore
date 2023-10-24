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
    <div className='py-4'>
      <div>
        <ProductImages imageUrls={product.imageUrls} name={product.name } />
      </div>

      <div className='p-4'>
        <ProductInfo product={ computeProductTotalPrice(product)} />
      </div>

      <div>
        <SectionTitle>Produtos Recomendados</SectionTitle>
        <ProductList products={product.category.products}/>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
;