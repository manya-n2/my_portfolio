import "../styles/Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <div className="logo">
          <span>M</span>
          <h2>Manya.dev</h2>
        </div>

        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Skills</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        <button className="contact-btn">
          Let's Talk
        </button>

      </div>
    </header>
  );
}

export default Navbar;