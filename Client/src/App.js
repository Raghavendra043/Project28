import "./App.css";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Stage1 from "./Components/Designer/Stage1";
import Stage2 from "./Components/Designer/Stage2";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Login />
      {/* <Stage1 /> */}
      {/* <Stage2 /> */}
    </div>
  );
}

export default App;
