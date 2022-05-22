import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Purchase from './component/Purchase/Purchase';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products/:purchaseId' element={<Purchase></Purchase>}></Route>
      </Routes>
    </div>
  );
}

export default App;
