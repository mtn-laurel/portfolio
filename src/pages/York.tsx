import Table1 from "../assets/renders/york1.png";
import Table2 from "../assets/renders/york2.png";
import Table3 from "../assets/renders/table3.png";
import "../pages/York.css";

export default function York() {
  return (
    <section className="gallery-section">
      <h2>York Gallery</h2>
      <div className="art">
        <div className="art-item">
          <img src={Table1} alt="York 1" className="pics" />
        </div>
        <div className="art-item">
          <img src={Table2} alt="York 2" className="pics" />
        </div>
        <div className="art-item">
          <img src={Table3} alt="York 3" className="pics" />
        </div>
      </div>
    </section>
  );
}