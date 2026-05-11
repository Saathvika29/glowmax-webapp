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
            window.location.href = "/login"
          }
        >
          Login
        </button>

        <button
          onClick={() =>
            window.location.href = "/signup"
          }
        >
          Signup
        </button>
      </ul>
      

    </nav>
  );
}