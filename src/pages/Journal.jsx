import { useState, useEffect }
from "react";

import axios from "axios";

export default function Journal() {

  const user =
    JSON.parse(localStorage.getItem("user"));

  const [content, setContent] =
    useState("");

  const [journals, setJournals] =
    useState([]);

  async function addJournal(e){

    e.preventDefault();

    try {

      await axios.post(
        "/_/backend/api/journal/add",
        {
          userId: user._id,
          content
        }
      );

      setContent("");

      fetchJournals();

    } catch(error){

      console.log(error);
    }
  }

  async function fetchJournals(){

    try {

      const response =
        await axios.get(
          `/_/backend/api/journal/${user._id}`
        );

      setJournals(response.data);

    } catch(error){

      console.log(error);
    }
  }

  useEffect(() => {

    fetchJournals();

  }, []);

  return (

    <div>

      <h1>My Journal ✍️</h1>

      <form onSubmit={addJournal}>

        <textarea

          placeholder="Write your thoughts..."

          value={content}

          onChange={(e) =>
            setContent(e.target.value)
          }

        />

        <button type="submit">
          Add Entry
        </button>

      </form>

      {

        journals.map((journal) => (

          <div key={journal._id}>

            <p>{journal.content}</p>

          </div>
        ))
      }

    </div>
  );
}