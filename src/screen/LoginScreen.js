import React from "react";
import firebaseApp from "../credenciales";
import { getAuth, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
const auth = getAuth(firebaseApp);
const googleAuthProvider = new GoogleAuthProvider();

export const LoginScreen = () => {
  return (
    <>
      <div className="mid-banner login login-banner max-width">
        <h1 className="text-light banner-h1 text-center">
          Welcome to <br /> the Admin Panel
        </h1>
      </div>
      <div className="row login mt-5 mb-5 max-width">
        <div className="col-12 col-md-8 col-lg-6 login-box p-4 bg-light">
          <h3>Login to create, edit or delete items</h3>
          <button
            className="btn btn-dark btn-lg"
            onClick={() => {
              signInWithRedirect(auth, googleAuthProvider);
            }}
          >
            Sign in - Google
          </button>
        </div>
      </div>
    </>
  );
};
