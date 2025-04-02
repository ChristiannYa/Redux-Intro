import { useSelector } from 'react-redux';
import { selectCartTotal, selectTotalItems } from './cartSlice';

const CartTotal = () => {
  const totalItems = useSelector(selectTotalItems);
  const totalPrice = useSelector(selectCartTotal);

  return (
    <div className="mr-1 text-right font-mono">
      <p>
        Total items: <span>{totalItems}</span>
      </p>
      <p>
        Total price: <span>{totalPrice.toFixed(2)}</span>
      </p>
    </div>
  );
};

export default CartTotal;
