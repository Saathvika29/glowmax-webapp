import { useState, useEffect }
from "react";

import axios from "axios";

export default function Hobbies() {

  const user =
    JSON.parse(localStorage.getItem("user"));

  const [hobby, setHobby] =
    useState("");

  const [hours, setHours] =
    useState("");

  const [hobbies, setHobbies] =
    useState([]);

  async function addHobby(e){

    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:3000/api/hobby/add",
        {
          userId: user._id,
          hobby,
          hours
        }
      );

      setHobby("");
      setHours("");

      fetchHobbies();

    } catch(error){

      console.log(error);
    }
  }

  async function fetchHobbies(){

    try {

      const response =
        await axios.get(
          `http://localhost:3000/api/hobby/${user._id}`
        );

      setHobbies(response.data);

    } catch(error){

      console.log(error);
    }
  }

  useEffect(() => {

    fetchHobbies();

  }, []);

  return (

    <div>

      <h1>My Hobbies 🎨</h1>

      <form onSubmit={addHobby}>

        <input

          type="text"

          placeholder="Enter Hobby"

          value={hobby}

          onChange={(e) =>
            setHobby(e.target.value)
          }

        />

        <input

          type="number"

          placeholder="Hours"

          value={hours}

          onChange={(e) =>
            setHours(e.target.value)
          }

        />

        <button type="submit">
          Add Hobby
        </button>

      </form>

      {

        hobbies.map((item) => (

          <div key={item._id}>

            <h3>{item.hobby}</h3>

            <p>
              {item.hours} hours
            </p>

          </div>
        ))
      }

    </div>
  );
}