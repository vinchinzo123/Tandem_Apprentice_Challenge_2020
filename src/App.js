import "./App.css";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <div className="min-h-screen bg-gray-200 p-10">
      <div className="mb-4">
        <p className=" text-center text-orange-500 font-light leading-none tracking-widest mb-10 text-5xl">
          tandem trivia
        </p>
      </div>
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
