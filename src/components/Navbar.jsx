import { Link } from "react-router-dom";

export default function Navbar() {

  return (

    <nav className="navbar">

      <h2>GlowMax</h2>

      <ul>

        <li>Home</li>
        <li>Features</li>
        <li>Support</li>

        <Link to="/login">
          <button>Login</button>
        </Link>

        <Link to="/signup">
          <button>Signup</button>
        </Link>

      </ul>

    </nav>
  );
}