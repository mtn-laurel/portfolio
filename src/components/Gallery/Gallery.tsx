import Table1 from "../../assets/renders/table1.png";
import Table2 from "../../assets/renders/table2.png";
import Table3 from "../../assets/renders/table3.png";

import "./Gallery.css";


export default function Gallery() {
  return (
    <section id="gallery" className="gallery-section">
        <h2>Gallery</h2>
        <div className="art">
          <div className="art-item">
            <a href="dining-room" className="label">Dining Room</a>
                <img src={Table1} alt="3D Table" className="pics"/>
            </div>
            <img src={Table2} alt="3D Render" className="pics"></img> 
            <img src={Table3} alt="3D Render" className="pics"></img> 
        </div>
      </section>
    );
}