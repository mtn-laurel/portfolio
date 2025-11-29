import Table1 from "../assets/renders/table1.png";
import Table2 from "../assets/renders/table2.png";
import Table3 from "../assets/renders/table3.png";
import "../components/Gallery/Gallery.css";

export default function GalleryPage() {
  return (
    <section className="gallery-section">
      <h2>Dining Room Gallery</h2>
      <div className="art">
        <div className="art-item">
          <img src={Table1} alt="Dining Room Table 1" className="pics" />
        </div>
        <div className="art-item">
          <img src={Table2} alt="Dining Room Table 2" className="pics" />
        </div>
        <div className="art-item">
          <img src={Table3} alt="Dining Room Table 3" className="pics" />
        </div>
      </div>
    </section>
  );
}
