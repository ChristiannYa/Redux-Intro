import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  incrementQuantity,
  decrementQuantity,
  removeItemFromCart,
} from './cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="w-full p-2">
      <div className="bg-neutral-200 text-black p-2 flex justify-between items-center">
        <div>
          <h3>{item.name}</h3>
          <p>
            ${item.price.toFixed(2)} × {item.quantity}
          </p>
        </div>
        <div className="flex items-center gap-x-2">
          <button
            className="bg-red-500 w-[20px] h-[20px] hover:bg-red-400"
            onClick={() => dispatch(decrementQuantity(item.id))}
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            className="bg-green-500 w-[20px] h-[20px] hover:bg-green-400"
            onClick={() => dispatch(incrementQuantity(item.id))}
          >
            +
          </button>
          <button
            onClick={() => dispatch(removeItemFromCart(item.id))}
            className="bg-red-700 text-xs px-2 py-0.5 ml-2 hover:bg-red-600"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;
