import { Link } from "react-router-dom";
import Pic1 from "../assets/renders/table1.png";
import Pic2 from "../assets/renders/backdoor.png";
import Pic3 from "../assets/renders/york1.png";
import Pic4 from "../assets/renders/room2.png";

import "../pages/GalleryPage.css";

export default function GalleryPage() {
  const images = [
    { src: Pic1, alt: "Dining Room", link: "/gallery/dining-room" },
    { src: Pic2, alt: "Dubois", link: "/gallery/dubois" },
    { src: Pic4, alt: "Cabin", link: "/gallery/cabin" },
    { src: Pic3, alt: "York", link: "/gallery/york" },
  ];

  return (
    <section className="gallery-section">
      <h2>Project Gallery</h2>
      <div className="art">
        {images.map((img, i) => (
          <div className="art-item" key={i}>
            <Link to={img.link} className="project-title">{img.alt}</Link>
            <img src={img.src} alt={img.alt} className="pics" />
          </div>
        ))}
      </div>
    </section>
  );
}

