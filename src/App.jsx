import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import UserMain from "./layouts/UserMain.jsx";
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import Items from "./pages/Items.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Beverages from "./components/Beverages.jsx";
import Desert from "./components/Desert.jsx";
import SetMenu from "./components/SetMenu.jsx";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserMain/>} exact >
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
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
