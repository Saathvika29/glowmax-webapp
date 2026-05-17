import { useState } from "react";
import axios from "axios";

export default function Signup() {

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  async function handleSignup(e) {

    e.preventDefault();

    try {

      const response = await axios.post(
  "/_/backend/api/auth/signup",
        {
          name,
          email,
          password
        }
      );

      alert(response.data.message);

    } catch(error){

      alert(error.response.data.message);
    }
  }

  return (

    <div className="signup-page">

      <form
        className="signup-form"
        onSubmit={handleSignup}
      >

        <h2>Create Account ✨</h2>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button type="submit">
          Signup
        </button>

      </form>

    </div>
  );
}