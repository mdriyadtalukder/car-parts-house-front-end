import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Purchase from './component/Purchase/Purchase';
import Dashboard from './component/Dashboard/Dashboard';
import Myorders from './component/Myorders';
import Myprofile from './component/Myprofile/Myprofile';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products/:purchaseId' element={<Purchase></Purchase>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/order' element={<Myorders></Myorders>}></Route>
        <Route path='/myprofile' element={<Myprofile></Myprofile>}></Route>
      </Routes>
    </div>
  );
}

export default App;
