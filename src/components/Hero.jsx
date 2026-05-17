import { Link } from "react-router-dom";

export default function Hero() {

  return (

    <div className="hero">

      <h1>Level Up Your Lifestyle</h1>

      <p>
        Track your sleep, mood, fitness, and nutrition
        all in one place.
      </p>

      <Link to="/signup">

        <button>
          Start GlowMax
        </button>

      </Link>

    </div>
  );
}