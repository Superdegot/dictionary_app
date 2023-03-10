import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="hello" />
        </main>
        <footer className="App-footer">
          <small>
            Coded by Ekaterina Filatova{" "}
            <br/>
            <a href="https://github.com/Superdegot/dictionary_app">
              Check code on GitHub
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
