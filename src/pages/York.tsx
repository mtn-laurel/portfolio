import { useState } from "react";
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";

import Pic1 from "../assets/renders/york1.png";
import Pic2 from "../assets/renders/york2.png";

import "../pages/York.css";

export default function York() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const images = [
    {src: Pic1},
    {src: Pic2},
  ];
  
  return (
    <section className="gallery-section">
      <h2>York</h2>

      <div className="art">
        {images.map((img, i) => (
          <div className="art-item" key={i}>
            <img
              src={img.src}
              alt={`York ${i + 1}`}
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