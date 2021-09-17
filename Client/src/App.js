import Navbar from "./Components/Navbar/Navbar";
import Slider from "./Components/Designer/Slider/Slider";


import AdminMain from "./Components/Admin/Main";
import Dashboard from "./Components/Admin/Dashboard/Dashboard";
import ClientDB from "./Components/Admin/Database/ClientDB";
import Projects from "./Components/Admin/Projects/Projects";



import Main from "./Components/Designer/Dashboard new/Main";
import ProfileMain from "./Components/Designer/Profile/ProfileMain";
import DesignerPerformance from "./Components/Designer/Performance/DesignerPerformance";
import DesginerSignUp from "./Components/Designer/Signup/DesginerSignUp";

function App() {
  return (
    <div className="App">

    {/* <SignupA />
    <SignupC />
    <SignupB /> */}

    {/* <Stage1 />
    <Stage2 /> */}
  <DesginerSignUp/>  
      {/* <DesignerPerformance/> */}
      {/* <ProfileMain /> */}



     {/* <Dashboard /> */}
     {/* <Navbar /> */}
     {/* <AdminMain /> */}
     {/* <Main /> */}
      {/* 
    <Login /> */}
     {/* <Slider
       min={0}
       max={1000}
       onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
     />  */}
     {/* <Main />
     <Projects />
     <ClientDB />*/} 
    </div> 
  );
}

export default App;
