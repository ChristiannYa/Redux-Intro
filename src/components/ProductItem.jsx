import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { addItemToCart } from '../features/cart/cartSlice';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  
  const handleAddToCart = () => {
    dispatch(addItemToCart(product));
  }
  
  return (
    <div className="bg-white/5 w-[300px] max-md:w-[140px] p-3">
      <h2>{product.name}</h2>
      <p>${product.price.toFixed(2)}</p>
      <button
        onClick={handleAddToCart}
        className="bg-blue-500 mt-1 px-2 py-0.5 hover:bg-blue-400 hover:cursor-pointer"
      >
        Add to Cart
      </button>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired
};

export default ProductItem;
