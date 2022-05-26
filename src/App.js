import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Purchase from './component/Purchase/Purchase';
import Dashboard from './component/Dashboard/Dashboard';
import Myorders from './component/Myorders';
import Myprofile from './component/Myprofile/Myprofile';
import Login from './component/LogIn/Login';
import SignUp from './component/SignUp/SignUp';
import RequireAuth from './component/RequireAuth/RequireAuth';
import Reviews from './component/Reviews/Reviews';
import Footer from './component/Footer/Footer';
import Users from './component/Users/Users';
import RequireAdmin from './component/RequireAuth/RequireAdmin';
import Allorders from './component/Allorders/Allorders';
import Allproducts from './component/Allproducts/Allproducts';
import Addproduct from './component/Addproduct/Addproduct';
import Payment from './component/Payment/Payment';
import Add from './component/Myprofile/Add';
import Myportfolio from './component/MyPortfolio/Myportfolio';
function App() {
  return (
    <div>

      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/myportfolio' element={<Myportfolio></Myportfolio>}></Route>
        <Route path='/products/:purchaseId' element={<RequireAuth>
          <Purchase></Purchase>
        </RequireAuth>}></Route>
        <Route path='dashboard' element={
          <RequireAuth>
            <Dashboard>
            </Dashboard>
          </RequireAuth>}>
          <Route index element={<Myprofile></Myprofile>}></Route>
          <Route path='update' element={<Add></Add>}></Route>
          <Route path='myorders' element={<Myorders></Myorders>}></Route>
          <Route path='review' element={<Reviews></Reviews>}></Route>
          <Route path='users' element={<RequireAdmin>
            <Users></Users>
          </RequireAdmin>}></Route>
          <Route path='allorders' element={<Allorders></Allorders>}></Route>
          <Route path='allproducts' element={<Allproducts></Allproducts>}></Route>
          <Route path='addproduct' element={<Addproduct></Addproduct>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>

    </div>
  );
}

export default App;
