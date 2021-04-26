import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="container">
      <div className="navbar">
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
