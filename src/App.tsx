import "./App.css";
import { useAppStore } from "./store";

function UpdateUserForm() {
  const { email, setUsername, setEmail, username } = useAppStore();

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
  );
}

function App() {
  const { email, username } = useAppStore();

  return (
    <>
      <h1>{username}</h1>
      <h2>{email}</h2>
      <UpdateUserForm />
    </>
  );
}

export default App;
