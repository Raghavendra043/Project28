import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
//import Navbar from "./Components/Designer/Dashboard new/Dashboard_Parts/Navbar/Navbar";

import Landing1 from "./Components/landing/Landing1";
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
import DesForget from "./Components/Designer/Login/ForgetMain";

// ---------------------------------Client--------------------------------
import ClientSignup from "./Components/client/Signup/ClientSignup";
import ClientLogin from "./Components/client/Login/ClientLogin";
import Dashboard from "./Components/client/Dashboard/dashboard";
import CreateProject from "./Components/client/CreateProject/Create/CreateProject";
import CreateProjectList from "./Components/client/CreateProject/Create/CreateProjectList";
import CreateP from "./Components/client/CreateProject/CreateP";
import Deli from "./Components/client/Dashboard/Dashboard_Parts/del/deli";
import Home from "./Components/client/Dashboard/Home/Home";
// ---------------------------------Admin---------------------------------
import AdminDashboard from "./Components/Admin_new/Dasdboard/AdminDashboard";
import ProjectTracker from "./Components/Admin_new/ProjectTracker/ProjectTracker";
import DesignerList from "./Components/Admin_new/Dasdboard/DesignerList";
import ClientDet from "./Components/Admin_new/Dasdboard/clientDetails";
import ProjectDet from "./Components/Admin_new/Dasdboard/ProjectDetails";
import Unassigned from "./Components/Admin_new/Dasdboard/Unassigned";
import AdminLogin from "./Components/Admin_new/Login/DesignerLogin";
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
      {/* <div className="Sidebar">
      
        </div> */}
        {/* <Navbar  /> */}
        {/* <Navbar/> */}
      <Router>
        <Switch>
          
        <Route path="/" exact component={Landing1} />

          <Route path="/home" exact component={Main} />
          <Route path="/designer/login" exact component={DesignerLogin} />
          <Route path="/designer/performance" exact component={DesignerPerformance}/>
          <Route path="/designer/signup" exact component={DesginerSignUp} />
          <Route path="/designer/dash" exact component={Main} />
          <Route path="/designer/profile" exact component={ProfileMain} />
          <Route path="/designer/forget" exact component={DesForget} />
          <Route path="/designer/complete" exact component={DesignerComplete} />
          <Route path="/client/profile" exact component={ClientProfile} />
          <Route path="/second" exact component={Second} />

          <Route path="/clientSignup" exact component={ClientSignup} />
          <Route path="/clientLogin" exact component={ClientLogin} />

          <Route path="/chome" exact component={Home} />
          <Route path="/cdash" exact component={Dashboard} />
          <Route path="/create" exact component={CreateProject} />
          <Route path="/createlist" exact component={CreateProjectList} />
          <Route path="/create1" exact component={CreateP} />

          <Route path="/admin/project" exact component={ProjectTracker} />
          <Route path="/admin/dash" exact component={AdminDashboard} />

          <Route path="/pdf" exact component={MyComponent} />

          <Route path="/chat" exact component={Chat} />
          <Route path="/chatadmin" exact component={ChatEngine} />
          <Route path="/test" exact component={Signup} />
          <Route path="/feedback" exact component={Feedback} />
          <Route path="/Empty" exact component={NoProjects} />
          <Route path="/create" exact component={CreateProject} />

          <Route path="/deli" exact component={Deli} />

          <Route path="/designer" exact component={DesignerList} />
          <Route path="/client" exact component={ClientDet} />
          <Route path="/pro" exact component={ProjectDet} />
          <Route path="/pro1" exact component={Unassigned} />
          <Route path="/adminLog" exact component={AdminLogin} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
