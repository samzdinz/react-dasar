import Foto from './components/Foto';
import ProdukInfo from './components/Produkinfo';
import './App.css';

function App() {

  return (
      <div className="ParentBox">
        <Foto />
        <ProdukInfo isDiscount="no" category="RUNNING" name="The Red Devil"/>
      </div>
  );
}


export default App;
