import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems, clearCart } from './cartSlice';
import CartItem from './CartItem';
import CartTotal from './CartTotal';

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  return (
    <div className="bg-neutral-700 w-full">
      <h2 className="text-2xl text-center">Your cart</h2>

      <div>
        {cartItems.length === 0 ? (
          <p className="text-center mt-2">Your cart is empty</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
            <CartTotal />
            <div className="p-2 text-end">
              <button
                onClick={() => dispatch(clearCart())}
                className="bg-red-700 px-2 py-0.5 text-sm hover:bg-red-600 rounded"
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
