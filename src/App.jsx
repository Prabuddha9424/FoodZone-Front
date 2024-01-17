import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import UserMain from "./layouts/UserMain.jsx";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<UserMain/>}/>
    </Routes>
    </Router>
  );
}

export default App;
