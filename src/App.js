import './App.css';
import { GameSection } from './components/GameSection';
import { Cart } from './components/Cart';
import { CartContextProvider } from './context/CartContext';

function App() {
  return (
    <CartContextProvider>
      <div className='app'>
        <GameSection />
        <Cart />
      </div>
    </CartContextProvider>
  );
}

export default App;
