import ProductItem from '@/components/ui/productItem';
import { Product } from '@prisma/client';
import '../../app/globals.css'
import { computeProductTotalPrice } from '@/helpers/product';

interface ProductListProps {
  products: Product[]
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className='flex w-full gap-4 overflow-x-auto scrollProductList px-4 md:px-0'>
      {products.map((product) => 
        <ProductItem key={product.id} product={computeProductTotalPrice(product)}/>) }
    </div>
  );
}
 
export default ProductList;