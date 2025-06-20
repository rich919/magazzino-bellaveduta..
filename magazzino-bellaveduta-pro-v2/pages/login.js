export default function LoginPage() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Login</h1>
      <form style={{ display: "flex", flexDirection: "column", maxWidth: "300px" }}>
        <label>Username:</label>
        <input type="text" placeholder="Inserisci username" />
        <label>Password:</label>
        <input type="password" placeholder="Inserisci password" />
        <button style={{ marginTop: "1rem" }}>Accedi</button>
      </form>
    </div>
  );
}
// Login component
