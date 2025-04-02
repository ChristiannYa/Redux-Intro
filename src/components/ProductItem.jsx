import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { addItemToCart, selectIsItemInCart } from '../features/cart/cartSlice';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const isItemInCart = useSelector((state) =>
    selectIsItemInCart(state, product.id)
  );

  const handleAddToCart = () => {
    if (!isItemInCart) {
      dispatch(addItemToCart(product));
    }
  };

  return (
    <div className="bg-white/5 w-[300px] max-md:w-[140px] p-3">
      <h2>{product.name}</h2>
      <p>${product.price.toFixed(2)}</p>
      <button
        onClick={handleAddToCart}
        className={`bg-blue-500 hover:bg-blue-400 ${
          isItemInCart
            ? `bg-transparent hover:bg-transparent hover:cursor-default px-0`
            : `hover:cursor-pointer px-2 py-0.5 mt-1`
        }`}
      >
        {isItemInCart ? 'Item in cart' : 'Add to cart'}
      </button>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductItem;
