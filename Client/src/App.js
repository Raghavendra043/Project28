import "./App.css";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Stage1 from "./Components/Designer/Stage1";
import Stage2 from "./Components/Designer/Stage2";
import SignupA from "./Components/Designer/Signup/SignupA";
import SignupB from "./Components/Designer/Signup/SignupB";
import SignupC from "./Components/Designer/Signup/SignupC";
import Slider from "./Components/Designer/Slider/Slider";
import Main from "./Components/Designer/Dashboard new/Main";
import AdminMain from "./Components/Admin/Main";
import Dashboard from "./Components/Admin/Dashboard/Dashboard";
import ClientDB from "./Components/Admin/Database/ClientDB";
import Projects from "./Components/Admin/Projects/Projects";

function App() {
  return (
    <div className="App">
     {/* <Dashboard /> */}
     {/* <Navbar /> */}
     <Main />
      {/* <Stage1 />
     <Stage2 />
      <SignupA />
     <SignupC />
     <SignupB />
    <Login /> */}
     {/* <Main />
     <AdminMain />
     <Projects />
     <ClientDB /> 
      <Slider
        min={0}
        max={1000}
        onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
      /> */}
    </div>
  );
}

export default App;