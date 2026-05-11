import { Navigate }
from "react-router-dom";
import { useState, useEffect }
from "react";

import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";
import WellnessDashboard
from "../components/Dashboard";

export default function Dashboard() {

  const user =
    JSON.parse(localStorage.getItem("user"));
const [journals, setJournals] =
  useState([]);

const [hobbies, setHobbies] =
  useState([]);

  if(!user){
    return <Navigate to="/" />;
  }

  function handleLogout(){

    localStorage.removeItem("user");

    window.location.href = "/";
  }
async function fetchData(){

  try {

    const journalResponse =
      await axios.get(
        `http://localhost:3000/api/journal/${user._id}`
      );

    const hobbyResponse =
      await axios.get(
        `http://localhost:3000/api/hobby/${user._id}`
      );

    setJournals(
      journalResponse.data
    );

    setHobbies(
      hobbyResponse.data
    );

  } catch(error){

    console.log(error);
  }
}

useEffect(() => {

  fetchData();

}, []);

const chartData = [

  {
    name: "Journals",
    value: journals.length
  },

  {
    name: "Hobbies",
    value: hobbies.length
  }

];
const glowScore =

  journals.length * 10 +

  hobbies.length * 15;

  return (

    <div className="dashboard-container">

      <div className="sidebar">

        <h2>GlowMax ✨</h2>

        <button
          onClick={() =>
            window.location.href = "/journal"
          }
        >
          Journal
        </button>

        <button
          onClick={() =>
            window.location.href = "/hobbies"
          }
        >
          Hobbies
        </button>

        <button
          onClick={() =>
            window.location.href = "/career"
          }
        >
          Career
        </button>

        <button onClick={handleLogout}>
          Logout
        </button>
        <button
  onClick={() =>
    window.location.href = "/mood"
  }
>
  Mood Tracker
</button>

      </div>

      <div className="dashboard-main">

        <h1>
          Welcome {user.name} ✨
        </h1>

        <h2>
          Glow Score: {glowScore} ✨
        </h2>

        <p>
          Start maxxing your lifestyle 🚀
        </p>
        <div className="cards">

  <div className="card">
    <h3>Journal Entries</h3>
    <p>{journals.length}</p>
  </div>

  <div className="card">
    <h3>Hobbies</h3>
    <p>{hobbies.length}</p>
  </div>

  <div className="card">
    <h3>Career Progress</h3>
    <p>68%</p>
  </div>
  <BarChart
  width={400}
  height={300}
  data={chartData}
>

  <XAxis dataKey="name" />

  <YAxis />

  <Tooltip />

  <Bar dataKey="value" />

</BarChart>

</div>
<WellnessDashboard />
<button
  onClick={() =>
    window.location.href = "/profile"
  }
>
  Profile
</button>

      </div>

    </div>
  );
}