import "../styles/Navbar.css";
import { useEffect, useState } from "react";

function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <header className={scrolled ? "navbar scrolled" : "navbar"}>

      <div className="navbar-container">

        <div className="logo">
          <span>M</span>
          <h2>Manya.dev</h2>
        </div>

        <ul className="nav-links">

          <li><a href="#home">Home</a></li>

          <li><a href="#about">About</a></li>

          <li><a href="#skills">Skills</a></li>

          <li><a href="#projects">Projects</a></li>

          <li><a href="#contact">Contact</a></li>

        </ul>

        

      </div>

    </header>

  );
}

export default Navbar;