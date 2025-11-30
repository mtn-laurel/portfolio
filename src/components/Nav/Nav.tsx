import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";


export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const galleryItems = ["Dining Room", "Dubois", "York", "Cabin"];

  return (
    <nav className={`main-nav flex justify-center space-x-6 p-4 ${scrolled ? "scrolled" : ""}`}>
      <a href="#about" className="hover:text-purple-300">About</a>
      <a href="#experience" className="hover:text-purple-300">Experience</a>

      {/* Gallery with hover dropdown */}
      <div className="relative group">

        <a href="#gallery" className="hover:text-purple-300 px-4 py-2">Gallery</a>
        <div className="absolute top-full left-0 mt-1 w-40 bg-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
          {galleryItems.map((item, i) => (
            <Link
              key={i}
              to={`/gallery/${item.toLowerCase().replace(/\s/g, "-")}`}
              className="block px-4 py-2 text-white hover:bg-gray-700"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>

      <a href="#contact" className="hover:text-purple-300">Contact</a>
    </nav>
  );
}
