import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import hue1 from "../assets/renders/hue1.png";
import hue2 from "../assets/renders/hue2.png";
import hue3 from "../assets/renders/hue3.png";
import hue4 from "../assets/renders/hue4.png";
import hue5 from "../assets/renders/hue5.png";
import hue6 from "../assets/renders/hue6.png";

import "../components/Gallery/Gallery.css";

export default function Hue() {
  const [open, setOpen] = useState(false);

  const images = [{ src: hue1}, {src: hue2}, { src: hue3} , {src: hue4} , {src: hue5}, {src: hue6} ];

  return (
    <section className="gallery-section">
      <h2>Hue Paradox</h2>

      <div className="art">
        <div className="art-item">
          <img 
          src={hue1} 
          alt="Door 1" 
          className="pics"
          onClick={() => setOpen(true)}
          style={{ cursor: "pointer" }} 
          />
        </div>
        </div>

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={images}
        />
    </section>
  );
}
