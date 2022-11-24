import './App.css'
import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Loginpage from './Pages/Loginpage/Loginpage';
import Registrationpage from './Pages/Registrationpage/Registrationpage';
import Moviepage from './Pages/Moviepage/Moviepage';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="login" element={<Loginpage />}></Route>
      <Route path="register" element={<Registrationpage />}></Route>
      <Route path = "movie" element={<Moviepage />}></Route>

    </Routes>
  )
}

export default App
