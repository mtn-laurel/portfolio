import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Dubois1 from "../assets/renders/backdoor.png";
import "../components/Gallery/Gallery.css";

export default function Dubois() {
  const [open, setOpen] = useState(false);

  const images = [{ src: Dubois1 }];

  return (
    <section className="gallery-section">
      <h2>Dubois</h2>

      <div className="art">
        <div className="art-item">
          <img 
          src={Dubois1} 
          alt="Door 1" 
          className="pics"
          onClick={() => setOpen(true)}
          style={{ cursor: "pointer" }} 
          />
        </div>

        <p>More pictures coming soon...</p>
        </div>

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={images}
        />
    </section>
  );
}
