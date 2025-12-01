import Pic1 from "../assets/renders/york1.png";
import Pic2 from "../assets/renders/york2.png";

import "../pages/York.css";

export default function York() {
  return (
    <section className="gallery-section">
      <h2>York Gallery</h2>
      <div className="art">
        <div className="art-item">
          <img src={Pic1} alt="York 1" className="pics" />
        </div>
        <div className="art-item">
          <img src={Pic2} alt="York 2" className="pics" />
        </div>
      </div>
    </section>
  );
}