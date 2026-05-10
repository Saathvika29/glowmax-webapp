import { Navigate } from "react-router-dom";

export default function Dashboard() {

  const user =
    JSON.parse(localStorage.getItem("user"));

  if(!user){
    return <Navigate to="/" />;
  }
  function handleLogout(){

  localStorage.removeItem("user");

  window.location.href = "/";
}

  return (

    <div>

      <h1>
        Welcome {user.name} ✨
      </h1>
      <button onClick={handleLogout}>
  Logout
</button>

    </div>
  );
}