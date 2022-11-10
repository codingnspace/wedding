import "./styles.css";

export default function App() {
  const today = new Date();
  const weddingDate = new Date("2023-03-18");
  const timeinmilisec = weddingDate.getTime() - today.getTime();
  const daysToWedding = Math.ceil(timeinmilisec / (1000 * 60 * 60 * 24));
  return (
    <div className="App">
      <nav>Information</nav>
      <h1>Pearl and Gilbert's Wedding</h1>
      <h2>March 18th, 2023</h2>
      <h3>Countdown: {daysToWedding} days to go</h3>
    </div>
  );
}
