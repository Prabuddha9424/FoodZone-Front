import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import UserMain from "./layouts/UserMain.jsx";
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import Items from "./pages/Items.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Beverages from "./components/Beverages.jsx";
import Desert from "./components/Desert.jsx";
import SetMenu from "./components/SetMenu.jsx";
import Cart from "./pages/Cart.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/signup.jsx";
import Cookies from 'js-cookie';
//import {getLocalStorageData} from "./helpers/StorageHelper.js";


function App() {
  const token = Cookies.get('token');
  console.log(token)
  return (
    <Router>
      <Routes>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Signup/>}/>
        <Route path="/" element={<UserMain/>} exact >
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/items/*" element={<Items/>}>
            <Route path="" element={
              <div>
                <SetMenu/>
                <Desert/>
                <Beverages/>
              </div>
            }/>
            <Route path="beverage" element={<Beverages/>}/>
            <Route path="desert" element={<Desert/>}/>
            <Route path="setmenu" element={<SetMenu/>}/>
          </Route>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact-us" element={<Contact/>}/>
          {(token !== null) && (token !== "") ? (
              <Route path="/cart" element={<Cart/>}/>
          ):(
              <Route path="*" element={<Navigate to="/login" />} />
          )}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
