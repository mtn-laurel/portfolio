import Dubois1 from "../assets/renders/backdoor.png";
import "../components/Gallery/Gallery.css";

export default function Dubois() {
  return (
    <section className="gallery-section">
      <h2>Dubois Gallery</h2>
      <div className="art">
        <div className="art-item">
          <img src={Dubois1} alt="Door 1" className="pics" />
        </div>
        <p>More pictures coming soon...</p>
        
      </div>
    </section>
  );
}
