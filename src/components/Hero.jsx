import { useNavigate } from "react-router-dom";

export default function Hero() {

  const navigate = useNavigate();

  return (
    <div className="hero">

      <h1>Level Up Your Lifestyle</h1>

      <p>
        Track your sleep, mood, fitness, and nutrition
        all in one place.
      </p>

      <button
  onClick={() =>
    <Link to="/signup">
  <button>Start GlowMax</button>
</Link>
  }
>
  Start GlowMax
</button>

    </div>
  );
}