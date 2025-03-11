import "./navbar.css"
import logo from "./download.png"; // Correct import
function Navbar() {
  return (
    <div className="main">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="lists">
        <li>Home</li>
        <li>About</li>
        <li>Support</li>
      </div>
      <div id="dowl">
        <button>Download</button>
      </div>
    </div>
  );
}
export  default Navbar