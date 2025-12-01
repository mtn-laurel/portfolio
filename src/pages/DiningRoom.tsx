import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";

import Pic1 from "../assets/renders/table1.png";
import Pic2 from "../assets/renders/table2.png";
import Pic3 from "../assets/renders/table3.png";

import "../pages/DiningRoom.css";

export default function DiningRoom() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const images = [
    { src: Pic1 },
    { src: Pic2 },
    { src: Pic3 }
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