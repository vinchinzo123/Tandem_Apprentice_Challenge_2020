import logo from "./logo.svg";
import "./App.css";
import { StartButton } from "./components/StartButton";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
    </div>
  );
}

export default App;
