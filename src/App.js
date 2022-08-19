import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import OrderReview from './components/OrderReview/OrderReview';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import Shipping from './components/Shipping/Shipping';
import Shop from './components/Shop/Shop';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path='/' element={<Shop></Shop>}></Route>
            <Route path='/shop' element={<Shop></Shop>}></Route>
            <Route path='/review' element={<OrderReview></OrderReview>}></Route>
            <Route path='/inventory' element={<PrivateRoute><Inventory></Inventory>
            </PrivateRoute>}></Route>
            <Route path='/shipping' element={<PrivateRoute><Shipping></Shipping>
            </PrivateRoute>}></Route>
            <Route path='/placeOrder' element={<PrivateRoute><PlaceOrder></PlaceOrder> 
            </PrivateRoute>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/register' element={<Register></Register>}></Route>
            <Route path='*' element={<NotFound></NotFound>}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
