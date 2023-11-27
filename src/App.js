import './App.css';
import { GameSection } from './components/GameSection';
import { Cart } from './components/Cart';

function App() {
  return (
    <div className='app'>
      <GameSection />
      <Cart />
    </div>
  );
}

export default App;
