import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import Home from "./components/Home/Home";
import Background from "./components/Experience/Experience";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";
import DiningRoom from "./pages/DiningRoom";
import York from "./pages/York";
import Cabin from "./pages/Cabin";
import Dubois from "./pages/Dubois";


function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Home />
              <Background />
              <Footer />
            </>
          }
        />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/dining-room" element={<DiningRoom />} />
        <Route path="/gallery/dubois" element={<Dubois />} />
        <Route path="/gallery/york" element={<York />} />
        <Route path="/gallery/cabin" element={<Cabin />} />
      </Routes>
    </>
  );
}

export default App;
