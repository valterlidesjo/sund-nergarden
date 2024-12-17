import { ParallaxProvider } from "react-scroll-parallax";
import NavMobile from "./components/NavMobile";
import RoomPageComponent from "./components/RoomPageComponent";
import NavHamburger from "./components/ui/NavHamburger/NavHamburger";
import SmaBtn from "./components/ui/SmaBtn/SmaBtn";
import HomePage from "./pages/Homepage";
import MatDryck from "./pages/MatDryck";
import GlampBerget from "./pages/rooms/GlampBerget";
import GlampNedre from "./pages/rooms/GlampNedre";
import GlampOvre from "./pages/rooms/GlampOvre";
import RoomBlombacka from "./pages/rooms/RoomBlockbacka";
import RoomHasthagen from "./pages/rooms/RoomHasthagen";
import RoomSjolunda from "./pages/rooms/RoomSjolunda";
import Rummen from "./pages/Rummen";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <ParallaxProvider>
      <BrowserRouter>
        <NavMobile />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/rummen" element={<Rummen />} />
            <Route path="/mat-dryck" element={<MatDryck />} />
            <Route path="/rummen/sjolunda" element={<RoomSjolunda/>} /> 
            <Route path="/rummen/hasthagen" element={<RoomHasthagen/>} /> 
            <Route path="/rummen/blombacka" element={<RoomBlombacka/>} /> 
            <Route path="/rummen/ovre" element={<GlampOvre/>} /> 
            <Route path="/rummen/nedre" element={<GlampNedre/>} /> 
            <Route path="/rummen/berget" element={<GlampBerget/>} /> 
          </Routes>
      </BrowserRouter>
      </ParallaxProvider>
    </>
  );
}

export default App;
