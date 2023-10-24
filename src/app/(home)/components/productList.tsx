import ProductItem from '@/components/ui/productItem';
import { Product } from '@prisma/client';
import '../../globals.css'
import { computeProductTotalPrice } from '@/helpers/product';

interface ProductListProps {
  products: Product[]
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className='flex w-full gap-4 overflow-x-auto scrollProductList'>
      {products.map((product) => 
        <ProductItem key={product.id} product={computeProductTotalPrice(product)}/>) }
    </div>
  );
}
 
export default ProductList;