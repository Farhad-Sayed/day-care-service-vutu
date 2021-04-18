import React, { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from "../../../App";
import { useHistory, useLocation } from "react-router";
import firebaseConfig from "./firebase.config";
import Navbar from "../../Home/Shared/Navbar/Navbar";
import Footer from "../../Home/Shared/Footer/Footer";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
        storeAuthToken();
      })
      .catch(function (error) {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const storeAuthToken = () => {
    firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem("token", idToken);
        history.replace(from);
      })
      .catch(function (error) {
        // Handle error
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div style={{ height: "800px" }} className="container w-100">
        <div className="login-page container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6 shadow p-5 mt-5">
              <h4 style={{ color: "hotpink" }}>LogIn:</h4>
              <div className="form-group">
                <label htmlFor="">User Name</label>
                <input type="text" className="form-control form-input" />
              </div>
              <div className="form-group">
                <label htmlFor="">Password</label>
                <input type="password" className="form-control form-input" />
              </div>
              <div className="form-group">
                <label htmlFor="" className="text-danger">
                  Forgot your password?
                </label>
              </div>
              <div className="from-group mt-5">
                <button className="btn btn-brand" onClick={handleGoogleSignIn}>
                  Google Sign in
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Login;
