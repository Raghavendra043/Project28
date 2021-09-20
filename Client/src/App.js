import React from "react";
import { Route, Switch ,  BrowserRouter as Router,} from "react-router-dom";

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
import DesignerLogin from "./Components/Designer/Login/DesignerLogin";
import ForgetPassword from "./Components/Designer/Login/ForgetPassword";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route path="/" exact component={Main} /> 
            <Route path="/designer/login" exact component={DesignerLogin} /> 
            <Route path="/designer/performance" exact component={DesignerPerformance} /> 
            <Route path="/designer/signup" exact component={DesginerSignUp} /> 
            <Route path="/designer/dash" exact component={Main} /> 
            <Route path="/designer/profile" exact component={ProfileMain} /> 
            <Route path="/designer/forget" exact component={ForgetPassword} /> 


            
        </Switch>
      </Router>


    </div> 
  );
}

export default App;
