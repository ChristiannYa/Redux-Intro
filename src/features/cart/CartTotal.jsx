import { useSelector } from 'react-redux';
import {
  selectCartTotal,
  selectTotalItems,
  selectAveragePrice,
} from './cartSlice';

const CartTotal = () => {
  const totalItems = useSelector(selectTotalItems);
  const totalPrice = useSelector(selectCartTotal);
  const averagePrice = useSelector(selectAveragePrice);

  return (
    <div className="mr-1 text-right font-mono">
      <p>
        Total items: <span>{totalItems}</span>
      </p>
      <p>
        Total price: <span>{totalPrice.toFixed(2)}</span>
      </p>
      <p>
        Average price: <span>{averagePrice}</span>
      </p>
    </div>
  );
};

export default CartTotal;
