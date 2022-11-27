import './App.css'
import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Loginpage from './Pages/Loginpage/Loginpage';
import Registrationpage from './Pages/Registrationpage/Registrationpage';
import Moviepage from './Pages/Moviepage/Moviepage';
import Individualmoviepage from './Pages/Individualmoviepage/Individualmoviepage';
import Ticketpage from './Pages/Ticketpage/Ticketpage'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/login" element={<Loginpage />}></Route>
      <Route path="/register" element={<Registrationpage />}></Route>
      <Route path="/movie" element={<Moviepage />}></Route>
      <Route path="/movie/:movieId" element={<Individualmoviepage />}></Route>
      <Route path="/ticket" element={<Ticketpage />}></Route>

    </Routes>
  )
}

export default App
