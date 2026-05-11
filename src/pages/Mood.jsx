import { useState } from "react";

export default function Mood() {

  const [mood, setMood] =
    useState("");

  function saveMood(selectedMood){

    setMood(selectedMood);

    localStorage.setItem(
      "mood",
      selectedMood
    );
  }
let suggestion = "";

if(mood === "Happy 😊"){
  suggestion =
    "Keep the energy going ✨";
}

else if(mood === "Sad 😔"){
  suggestion =
    "Take some rest and journal ✍️";
}

else if(mood === "Focused 🔥"){
  suggestion =
    "Perfect time to work on goals 🚀";
}

  return (

    <div>

      <h1>Mood Tracker 🌈</h1>

      <div>

        <button
          onClick={() =>
            saveMood("Happy 😊")
          }
        >
          Happy
        </button>

        <button
          onClick={() =>
            saveMood("Sad 😔")
          }
        >
          Sad
        </button>

        <button
          onClick={() =>
            saveMood("Focused 🔥")
          }
        >
          Focused
        </button>

      </div>

      <h2>
        Current Mood: {mood}
      </h2>
      <p>{suggestion}</p>

    </div>
  );
}