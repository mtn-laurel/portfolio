import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import ExperiencePage from "./pages/ExperiencePage";
import Contact from "./pages/Contact";
import GalleryPage from "./pages/GalleryPage";
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
              <Footer />
            </>
          }
        />

        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/gallery" element={<GalleryPage />} />

        <Route path="/gallery/dining-room" element={<DiningRoom />} />
        <Route path="/gallery/dubois" element={<Dubois />} />
        <Route path="/gallery/york" element={<York />} />
        <Route path="/gallery/cabin" element={<Cabin />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
