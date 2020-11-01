import "./App.css";
import { Navigation } from "./components/Navigation";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="min-h-screen bg-gray-200 p-10">
      <Header />
      <div
        style={{ minHeight: "13rem" }}
        className="container rounded-lg mx-auto shadow-2xl bg-white font-light max-w-lg text-gray-700 p-4 h-46"
      >
        <Navigation />
      </div>
    </div>
  );
}

export default App;
