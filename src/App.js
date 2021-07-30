import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Appointment from './Components/Appointment/Appointment/Appointment';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import Login from './Components/Login/Login/Login';
import { createContext, useState } from 'react';
import AllPatients from './Components/Dashboard/AllPatients/AllPatients';
import AddDoctor from './Components/AddDoctor/AddDoctor';
// import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route path = "/appointment"> <Appointment></Appointment> </Route>
        <Route path = "/dashboard"> <Dashboard></Dashboard> </Route>
        <Route path="/allPatients">
            <AllPatients></AllPatients>
          </Route>
          <Route path="/addDoctor">
            <AddDoctor></AddDoctor>
          </Route>
        <Route path = "/login"> <Login></Login> </Route>
        <Route exact path = "/"> <Home></Home> </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
