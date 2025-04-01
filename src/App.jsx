import ProductList from './components/ProductList';
import Cart from './features/cart/Cart';

const App = () => {
  return (
    <div className="bg-neutral-900 text-white w-screen min-h-screen p-10">
      <div className="w-[min(100%,1200px)] mx-auto flex justify-between items-start gap-x-16">
        <ProductList />
        <Cart/>
      </div>
    </div>
  );
};

export default App;
