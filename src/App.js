// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createContext, useState } from "react";
import Login from "./Components/Login/Login/Login";
import Home from "./Components/Home/Home/Home";
import AddServices from "./Components/Dashboard/AddServices/AddServices";
import ManageServices from "./Components/Dashboard/ManageServices/ManageServices";
import Enroll from "./Components/Dashboard/Enroll/Enroll";
import CheckOut from "./Components/Home/CheckOut/CheckOut";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";
import AddAdmin from "./Components/Dashboard/AddAdmin/AddAdmin";
import Review from "./Components/Dashboard/Review/Review";
import OrderList from "./Components/Dashboard/OrderList/OrderList";
import BookList from "./Components/Dashboard/BookList/BookList";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/checkout/:id">
            <CheckOut></CheckOut>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/addservices">
            <AddServices></AddServices>
          </Route>
          <Route path="/manageservices">
            <ManageServices></ManageServices>
          </Route>
          <Route path="/addAdmin">
            <AddAdmin></AddAdmin>
          </Route>
          <Route path="/enroll">
            <Enroll></Enroll>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/orderList">
            <OrderList></OrderList>
          </Route>
          <Route path="/bookList">
            <BookList></BookList>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
