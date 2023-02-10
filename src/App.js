import logo from './logo.svg';
import './App.css';
import Routers from './components/Routers';
import { BrowserRouter } from 'react-router-dom';
import Excel from './components/Excel';

function App() {

  return (
    <div className="App" >
      <BrowserRouter>
   <Routers/>
   </BrowserRouter>
   {/* <Excel/> */}
      
    </div>
  );
}

export default App;
