import { useState } from "react";
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";

import Pic1 from "../assets/renders/room1.png";
import Pic2 from "../assets/renders/room2.png";
import Pic3 from "../assets/renders/room3.png";
import Pic4 from "../assets/renders/room4.png";

import "../pages/Cabin.css";

export default function Cabin() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const images = [
    {src: Pic1},
    {src: Pic2},
    {src: Pic3},
    {src: Pic4}
  ];

  return (
    <section className="gallery-section">
      <h2>Dining Room</h2>

      <div className="art">
        {images.map((img, i) => (
          <div className="art-item" key={i}>
            <img 
              src={img.src}
              alt={`Dining Room Table ${i + 1}`}
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