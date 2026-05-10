import { useState } from "react";
import axios from "axios";

export default function Login() {

  const [email, setEmail] = useState("");

  const [password, setPassword] =
    useState("");

  async function handleLogin(e){

    e.preventDefault();

    try {

      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        {
          email,
          password
        }
      );

      localStorage.setItem(
  "user",
  JSON.stringify(response.data.user)
);

alert(response.data.message);

window.location.href = "/dashboard";

    } catch(error){

      alert(error.response.data.message);
    }
  }

  return (

    <div className="signup-page">

      <form
        className="signup-form"
        onSubmit={handleLogin}
      >

        <h2>Login ✨</h2>

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
          Login
        </button>

      </form>

    </div>
  );
}