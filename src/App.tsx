import NavMobile from "./components/NavMobile";
import RoomPageComponent from "./components/RoomPageComponent";
import NavHamburger from "./components/ui/NavHamburger/NavHamburger";
import SmaBtn from "./components/ui/SmaBtn/SmaBtn";
import HomePage from "./pages/Homepage";
import MatDryck from "./pages/MatDryck";
import Rummen from "./pages/Rummen";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavMobile />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/rummen" element={<Rummen />} />
            <Route path="/mat-dryck" element={<MatDryck />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
