import HorizontalScroll from "./components/HorizontalScroll";
import BackArrow from "./components/ui/BackArrow/BackArrow";
import BigBtn from "./components/ui/BigBtn/BigBtn";
import NavHamburger from "./components/ui/NavHamburger/NavHamburger";

function App() {
  return (
    <>
      <NavHamburger />
      <BackArrow size="3.5rem" />
      <BigBtn text="Boka nu" />
      <HorizontalScroll />
    </>
  );
}

export default App;
