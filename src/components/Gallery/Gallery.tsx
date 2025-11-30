import Pic1 from "../../assets/renders/table1.png";
import Pic2 from "../../assets/renders/room1.png";
import Pic3 from "../../assets/renders/table3.png";
import Pic4 from "../../assets/renders/table3.png";

import "./Gallery.css";


export default function Gallery() {
  return (
    <section id="gallery" className="gallery-section">
        <h2>Gallery</h2>
        <div className="art">
          <div className="art-item">
            <img src={Pic1} alt="3D Table" className="pics"/>
            <img src={Pic2} alt="3D Render" className="pics"></img> 
            <img src={Pic3} alt="3D Render" className="pics"></img>
            <img src={Pic4} alt="3D Render" className="pics"></img> 
          </div>
        </div>
      </section>
    );
}