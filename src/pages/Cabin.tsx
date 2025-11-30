import Pic1 from "../assets/renders/room1.png";
import Pic2 from "../assets/renders/room2.png";
import Pic3 from "../assets/renders/table3.png";
import "../pages/Cabin.css";

export default function Cabin() {
  return (
    <section className="gallery-section">
      <h2>Dining Room Gallery</h2>
      <div className="art">
        <div className="art-item">
          <img src={Pic1} alt="Dining Room Table 1" className="pics" />
        </div>
        <div className="art-item">
          <img src={Pic2} alt="Dining Room Table 2" className="pics" />
        </div>
        <div className="art-item">
          <img src={Pic3} alt="Dining Room Table 3" className="pics" />
        </div>
      </div>
    </section>
  );
}