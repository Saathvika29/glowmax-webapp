export default function Profile() {

  const user =
    JSON.parse(localStorage.getItem("user"));

  return (

    <div>

      <h1>My Profile 👤</h1>

      <h2>Name: {user.name}</h2>

      <h2>Email: {user.email}</h2>

      <h2>Glow Score: 85 ✨</h2>

    </div>
  );
}