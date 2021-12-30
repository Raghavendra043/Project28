import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
//import Navbar from "./Components/Navbar/Navbar";
import Navbar from "./Components/Designer/Dashboard new/Dashboard_Parts/Navbar/Navbar";

// -----------------------------Designer-----------------------------
import Main from "./Components/Designer/Dashboard new/Main";
import ProfileMain from "./Components/Designer/Profile/ProfileMain";
import DesignerPerformance from "./Components/Designer/Performance/DesignerPerformance";
import DesginerSignUp from "./Components/Designer/Signup/DesginerSignUp";
import DesignerComplete from "./Components/Designer/ProfileCompletion/DesignerComplete";
import DesignerLogin from "./Components/Designer/Login/DesignerLogin";
import ForgetMain from "./Components/Designer/Login/ForgetMain";
import ClientProfile from "./Components/client/Profile/Profile";
import Second from "./Components/Designer/ProfileCompletion/Parts/Second";
// ---------------------------------Client--------------------------------
import ClientSignup from "./Components/client/Signup/ClientSignup";
import ClientLogin from "./Components/client/Login/ClientLogin";
import Dashboard from "./Components/client/Dashboard/dashboard";
import CreateProject from "./Components/client/CreateProject/CreateProject";

// ---------------------------------Admin---------------------------------
import AdminDashboard from "./Components/Admin_new/Dasdboard/AdminDashboard";
import ProjectTracker from "./Components/Admin_new/ProjectTracker/ProjectTracker";

// -----------------------------ChatBox-----------------------------
import Chat from "./trail/chat";
import ChatEngine from "./trail/admin";
import Signup from "./trail/signup";

// -----------------------------Feedback-----------------------------
import MyComponent from "./pdf/sample";
import { signup } from "./firebasefunctions/login";
import Feedback from "./Components/Designer/Feedback/feedback";
import NoProjects from "./Components/Designer/NoProjectsRedirect/NoProjects";
//import './Components/Designer/Dashboard new/Main.css'

import { useHistory } from "react-router";
function App() {
  const history = useHistory();
  const props = { history };
  return (
    <div className="App">
      {/* <div className="Sidebar"><Navbar {...{history}}/></div> */}
      {/* <Navbar/> */}

      <Router>
        <Switch>
          <Route path="/home" exact component={Main} />
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
          <Route path="/second" exact component={Second} />

          <Route path="/clientSignup" exact component={ClientSignup} />
          <Route path="/clientLogin" exact component={ClientLogin} />
          <Route path="/chome" exact component={Dashboard} />
          <Route path="/create" exact component={CreateProject} />

          <Route path="/admin/project" exact component={ProjectTracker} />
          <Route path="/admin/dash" exact component={AdminDashboard} />

          <Route path="/pdf" exact component={MyComponent} />

          <Route path="/chat" exact component={Chat} />
          <Route path="/chatadmin" exact component={ChatEngine} />
          <Route path="/test" exact component={Signup} />
          <Route path="/feedback" exact component={Feedback} />
          <Route path="/Empty" exact component={NoProjects} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
