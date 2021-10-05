import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

import AdminMain from "./Components/Admin/Main";
import Dashboard from "./Components/Admin/Dashboard/Dashboard";
import ClientDB from "./Components/Admin/Database/ClientDB";
import Projects from "./Components/Admin/Projects/Projects";

// -----------------------------Designer-----------------------------
import Main from "./Components/Designer/Dashboard new/Main";
import ProfileMain from "./Components/Designer/Profile/ProfileMain";
import DesignerPerformance from "./Components/Designer/Performance/DesignerPerformance";
import DesginerSignUp from "./Components/Designer/Signup/DesginerSignUp";
import DesignerComplete from "./Components/Designer/ProfileCompletion/DesignerComplete";
import DesignerLogin from "./Components/Designer/Login/DesignerLogin";
import ForgetMain from "./Components/Designer/Login/ForgetMain";
import ClientProfile from "./Components/client/Profile/Profile"

// ---------------------------------Client--------------------------------
import ClientSignup from "./Components/client/Signup/ClientSignup";
import ClientLogin from "./Components/client/Login/ClientLogin";


// ---------------------------------Admin---------------------------------
import AdminDashboard from "./Components/Admin_new/Dasdboard/AdminDashboard";
import ProjectTracker from "./Components/Admin_new/ProjectTracker/ProjectTracker";

function App() {
  return (
    <div className="App">
       <Navbar/>
      {/* <AdminDashboard/> */}
      {/* <ProjectTracker/> */}
      
      <Router>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/designer/login" exact component={DesignerLogin} />
          <Route
            path="/designer/performance"
            exact
            component={DesignerPerformance}
          />
          <Route path="/designer/signup" exact component={DesginerSignUp} />
          <Route path="/designer/dash" exact component={Main} />
          <Route path="/designer/profile" exact component={ProfileMain} />
          <Route path="/designer/forget" exact component={ForgetMain} />
          <Route path="/designer/complete" exact component={DesignerComplete} />
          <Route path="/client/profile" exact component={ClientProfile} />

          
          <Route path="/clientSignup" exact component={ClientSignup} />
          <Route path="/clientLogin" exact component={ClientLogin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
