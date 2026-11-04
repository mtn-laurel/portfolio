import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";

import Hue1 from "../assets/renders/hue1.png";
import Hue2 from "../assets/renders/hue2.png";
import Hue3 from "../assets/renders/hue3.png";
import Hue4 from "../assets/renders/hue4.png";
import Hue5 from "../assets/renders/hue5.png";
import Hue6 from "../assets/renders/hue6.png";

// import "../components/Gallery/Gallery.css";

import "../pages/HueParadox.css";

export default function HueParadox() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const images = [{ src: Hue1}, 
                  {src: Hue2}, 
                  { src: Hue3}, 
                  {src: Hue4}, 
                  {src: Hue5}, 
                  {src: Hue6} 
  ];

  return (
    <section className="gallery-section">
      <h2>Hue Paradox</h2>

      <div className="art">
        {images.map((img, i) => (
          <div className="art-item" key={i}>
            <img
              src={img.src}
              alt={`Hue Paradox ${i + 1}`}
              className="pics"
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
              style={{ cursor: "pointer" }}
            />
          </div>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images}
      />
    </section>
  );
}