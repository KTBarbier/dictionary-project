import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">
          <small>
            <a
              href="https://github.com/KTBarbier/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              Open-sourced
            </a>{" "}
            code by{" "}
            <a
              href="https://www.kristenbarbier.com"
              target="_blank"
              rel="noreferrer"
            >
              Kristen Barbier
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
