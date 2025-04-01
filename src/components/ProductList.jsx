import { products } from '../constants/products';
import ProductItem from './ProductItem';

const ProductList = () => {
  return (
    <div>
      <p className='text-2xl text-center mb-4'>Available products:</p>

      <div className='flex flex-col justify-center items-center gap-y-2'>
        {products.map((product) => (
          <ProductItem key={product.id} product={product}/>
        ))}
      </div>
    </div>
  )
}

export default ProductList