import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import FlightSearchResult from "./pages/flightsResult/FlightSearchResult";
import Feedback from "./pages/Feedback/Feedback";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import FlightReserveRW from "./pages/flightResearve/FlightReserveRW"
import FlightReserveOW from "./pages/flightResearve/FlightReserveOW";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        
        <Route path="/flightList" element={<FlightSearchResult />} />

        <Route path="/flightReserve-roundway" element={<FlightReserveRW />} />
        <Route path="/flightReserve-onedway" element={<FlightReserveOW/>} />
        <Route path="/feedback" element={<Feedback/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
