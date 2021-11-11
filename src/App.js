import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import AuthProvider from "./Context/AuthProvider/AuthProvider.js";
import Appointment from "./Pages/Appointment/Appointment/Appointment.js";
import Home from "./Pages/Home/Home/Home.js";
import Login from "./Pages/Login/Login/Login.js";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute.js";
import Register from "./Pages/Login/Register/Register.js";
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard.js';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/appointment">
              <Appointment></Appointment>
            </PrivateRoute>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
