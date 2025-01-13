import { ParallaxProvider } from "react-scroll-parallax";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavMobile from "./components/NavMobile";
import HomePage from "./pages/Homepage";
import MatDryck from "./pages/MatDryck";
import GlampBerget from "./pages/rooms/GlampBerget";
import GlampNedre from "./pages/rooms/GlampNedre";
import GlampOvre from "./pages/rooms/GlampOvre";
import RoomBlombacka from "./pages/rooms/RoomBlockbacka";
import RoomHasthagen from "./pages/rooms/RoomHasthagen";
import RoomSjolunda from "./pages/rooms/RoomSjolunda";
import Rummen from "./pages/Rummen";
import ThreeCourseMenu from "./pages/ThreeCourseMenu";
import FiveCourseMenu from "./pages/FiveCourseMenu";
import Footer from "./components/Footer";
import SnurrV2 from "./components/ui/SurrV2/SnurrV2";
import NavDesktop from "./components/DesktopOnly/NavDesktop";
import ContactMessage from "./pages/ContactMessage";
import OpeningHours from "./pages/OpeningHours";

function App() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 600);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 600);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <ParallaxProvider>
        <BrowserRouter>
          {isDesktop ? <NavDesktop /> : <NavMobile />}

          <SnurrV2 />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/rummen" element={<Rummen />} />
            <Route path="/mat-dryck" element={<MatDryck />} />
            <Route path="/rummen/sjolunda" element={<RoomSjolunda />} />
            <Route path="/rummen/hasthagen" element={<RoomHasthagen />} />
            <Route path="/rummen/blombacka" element={<RoomBlombacka />} />
            <Route path="/rummen/ovre" element={<GlampOvre />} />
            <Route path="/rummen/nedre" element={<GlampNedre />} />
            <Route path="/rummen/berget" element={<GlampBerget />} />
            <Route path="/mat-dryck/tre" element={<ThreeCourseMenu />} />
            <Route path="/mat-dryck/fem" element={<FiveCourseMenu />} />
            <Route path="/kontakt" element={<ContactMessage />} />
            <Route path="/oppetider" element={<OpeningHours />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ParallaxProvider>
    </>
  );
}

export default App;
