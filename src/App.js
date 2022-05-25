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
function App() {
  return (
    <div>

      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products/:purchaseId' element={<RequireAuth>
          <Purchase></Purchase>
        </RequireAuth>}></Route>
        <Route path='dashboard' element={
          <RequireAuth>
            <Dashboard>
            </Dashboard>
          </RequireAuth>}>

          <Route path='myorders' element={<Myorders></Myorders>}></Route>
          <Route path='review' element={<Reviews></Reviews>}></Route>
          <Route path='users' element={<RequireAdmin>
            <Users></Users>
          </RequireAdmin>}></Route>
          <Route path='allorders' element={<Allorders></Allorders>}></Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
