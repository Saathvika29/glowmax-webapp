import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="navbar">

      <h2>GlowMax</h2>

      <ul>
        <li>Home</li>
        <li>Features</li>
        <li>Support</li>
        <button
          onClick={() =>
            <Link to="/login">
  <button>Login</button>
</Link>
          }
        >
          Login
        </button>

        <button
          onClick={() =>
           <Link to="/signup">
  <button>Signup</button>
</Link>
          }
        >
          Signup
        </button>
      </ul>
      

    </nav>
  );
}