import "./App.css";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Stage1 from "./Components/Designer/Stage1";
import Stage2 from "./Components/Designer/Stage2";
import SignupA from "./Components/Designer/Signup/SignupA";
import SignupB from "./Components/Designer/Signup/SignupB";
import SignupC from "./Components/Designer/Signup/SignupC";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SignupC />
      {/* <SignupB /> */}
      {/* <SignupA /> */}
      {/* <Login /> */}
      {/* <Stage1 /> */}
      {/* <Stage2 /> */}
    </div>
  );
}

export default App;
