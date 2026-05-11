import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Landing from "./pages/Landing";

import Login from "./pages/Login";

import Signup from "./pages/Signup";

import Dashboard from "./pages/Dashboard";

import Journal from "./pages/Journal";

import Hobbies from "./pages/Hobbies";

import Career from "./pages/Career";

import Mood from "./pages/Mood";

import Profile from "./pages/Profile";

export default function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Landing />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/journal"
          element={<Journal />}
        />

        <Route
          path="/hobbies"
          element={<Hobbies />}
        />

        <Route
          path="/career"
          element={<Career />}
        />

        <Route
          path="/mood"
          element={<Mood />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

      </Routes>

    </BrowserRouter>
  );
}