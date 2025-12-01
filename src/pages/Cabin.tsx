import Pic1 from "../assets/renders/room1.png";
import Pic2 from "../assets/renders/room2.png";
import Pic3 from "../assets/renders/room3.png";
import Pic4 from "../assets/renders/room4.png";
import "../pages/Cabin.css";

export default function Cabin() {
  return (
    <section className="gallery-section">
      <h2>Dining Room Gallery</h2>
      <div className="art">
        <div className="art-item">
          <img src={Pic1} alt="Cabin fireplace" className="pics" />
        </div>
        <div className="art-item">
          <img src={Pic2} alt="Cabin loft" className="pics" />
        </div>
        <div className="art-item">
          <img src={Pic3} alt="Cabin bed" className="pics" />
        </div>
        <div className="art-item">
          <img src={Pic4} alt="Cabin living room" className="pics" />
        </div>
      </div>
    </section>
  );
}