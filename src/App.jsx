import './App.css'
import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Loginpage from './Pages/Loginpage/Loginpage';
import Registrationpage from './Pages/Registrationpage/Registrationpage';
import Moviepage from './Pages/Moviepage/Moviepage';
import Individualmoviepage from './Pages/Individualmoviepage/Individualmoviepage';
import Paymentpage from './Pages/Paymentpage/Paymentpage'
import Searchpage from './Pages/Searchpage/Searchpage'
import Ticketpage from './Pages/Ticketpage/Ticketpage'
import Checkticketpage from './Pages/Checkticketpage/Checkticketpage';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/login" element={<Loginpage />}></Route>
      <Route path="/register" element={<Registrationpage />}></Route>
      <Route path="/movie" element={<Moviepage />}></Route>
      <Route path="/movie/:movieId" element={<Individualmoviepage />}></Route>
      <Route path="/movie/:movieId/payment" element={<Paymentpage />}></Route>
      <Route path="/ticket" element={<Ticketpage />}></Route>
      <Route path="/search" element={<Searchpage />}></Route>
      <Route path="/checkticket" element={<Checkticketpage />}></Route>
    </Routes>
  )
}

export default App
