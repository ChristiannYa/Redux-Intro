import { useSelector } from 'react-redux';
import { selectCartTotal } from './cartSlice';

const CartTotal = () => {
  const total = useSelector(selectCartTotal);

  return (
    <div className="mr-1 text-right">
      <p className='font-mono'>
        Total: $<span>{total.toFixed(2)}</span>
      </p>
    </div>
  );
};

export default CartTotal;
