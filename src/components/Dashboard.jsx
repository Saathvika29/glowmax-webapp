import { useState, useEffect } from "react";

export default function Dashboard() {

const [water, setWater] = useState(
  Number(localStorage.getItem("water")) || 0
);
  const [mood, setMood] = useState(
  localStorage.getItem("mood") || "Motivated"
);
  const [sleep, setSleep] = useState(
  Number(localStorage.getItem("sleep")) || 7
);
    const quotes = [
    "Small progress is still progress ✨",
    "Discipline creates confidence 💪",
    "Sleep well, glow better 😴",
    "Consistency beats motivation 🔥",
    "Take care of your mind and body 🌈"
  ];
  const [quote, setQuote] = useState(quotes[0]);
  const [streak, setStreak] = useState(
  Number(localStorage.getItem("streak")) || 1
);
const workouts = [
  "Push Day 💪",
  "Pull Day 🏋️",
  "Leg Day 🦵",
  "Cardio 🏃",
  "Yoga 🧘"
];

const [workout, setWorkout] = useState(
  localStorage.getItem("workout") || workouts[0]
);
const [completed, setCompleted] = useState(
  JSON.parse(localStorage.getItem("completed")) || false
);

    useEffect(() => {
    localStorage.setItem("water", water);
  }, [water]);

  useEffect(() => {
  localStorage.setItem("mood", mood);
}, [mood]);

 useEffect(() => {
  localStorage.setItem("sleep", sleep);
}, [sleep]);

useEffect(() => {
  localStorage.setItem("streak", streak);
}, [streak]);

useEffect(() => {
  localStorage.setItem("workout", workout);
}, [workout]);

useEffect(() => {
  localStorage.setItem(
    "completed",
    JSON.stringify(completed)
  );
}, [completed]);

  function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);

  setQuote(quotes[randomIndex]);
}
function increaseStreak() {
  setStreak(streak + 1);
}
function changeWorkout() {

  const randomIndex =
    Math.floor(Math.random() * workouts.length);

  setWorkout(workouts[randomIndex]);

  setCompleted(false);
}

function completeWorkout() {
  setCompleted(true);
}

  function addWater() {
    if(water < 8){
      setWater(water + 1);
    }
  }

  return (
    <div className="dashboard">

      <h2>Your Daily Dashboard ✨</h2>

      <div className="dashboard-grid">
        <div className="dashboard-card">

  <h3>Daily Motivation ✨</h3>

  <p>{quote}</p>

  <button onClick={generateQuote}>
    New Quote
  </button>

</div>
          <div className="dashboard-card">

  <h3>Glow Streak 🔥</h3>

  <p>You are on a {streak} day streak!</p>

  <button onClick={increaseStreak}>
    Complete Today
  </button>

</div>

        <div className="dashboard-card">
          <h3>Water Intake 💧</h3>

          <p>{water} / 8 glasses completed</p>
          <div className="progress-bar">
  <div
    className="progress"
    style={{ width: `${(water / 8) * 100}%` }}
  ></div>
</div>

          <button onClick={addWater}>
            Add Water
          </button>
        </div>

       <div className="dashboard-card">

  <h3>Sleep Tracker 😴</h3>

  <p>You slept {sleep} hours</p>

  <input
    type="number"
    value={sleep}
    onChange={(e) => setSleep(e.target.value)}
    min="0"
    max="24"
  />

</div>

        <div className="dashboard-card">

  <h3>Workout 🔥</h3>

  <p>Today's workout: {workout}</p>

  <p>
    Status:
    {completed ? " Completed ✅" : " Pending ⏳"}
  </p>

  <div className="mood-buttons">

    <button onClick={completeWorkout}>
      Mark Complete
    </button>

    <button onClick={changeWorkout}>
      New Workout
    </button>

  </div>

</div>

        <div className="dashboard-card">

  <h3>Mood 🌈</h3>

  <p>Current Mood: {mood}</p>

  <div className="mood-buttons">

    <button onClick={() => setMood("Happy")}>
      Happy
    </button>

    <button onClick={() => setMood("Tired")}>
      Tired
    </button>

    <button onClick={() => setMood("Sad")}>
      Sad
    </button>

    <button onClick={() => setMood("Motivated")}>
      Motivated
    </button>

  </div>

</div>

        

      </div>

    </div>
  );
}