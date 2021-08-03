import "./App.css";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Stage1 from "./Components/Designer/Stage1";
import Stage2 from "./Components/Designer/Stage2";
import SignupA from "./Components/Designer/Signup/SignupA";
import SignupB from "./Components/Designer/Signup/SignupB";
import SignupC from "./Components/Designer/Signup/SignupC";
import Slider from "./Components/Designer/Slider/Slider";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Stage2 /> */}
      {/* <SignupC /> */}
      {/* <SignupB /> */}
      {/* <SignupA /> */}
      {/* <Login /> */}
      {/* <Stage1 /> */}
      <Slider
        min={0}
        max={1000}
        onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
      />
    </div>
  );
}

export default App;
