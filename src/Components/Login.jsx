import React from "react";
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { useEffect } from "react";

const Login = () => {
  const thisYear = new Date().getFullYear();
  const navigate = useNavigate();

  const provider = new GoogleAuthProvider();

  // const [user] = useAuthState();

  const handleLogInWithGoogle = async () => {
    // ----->TODO: Login with Google using Firebase then redirect to Home page
    await signInWithPopup(auth, provider)
      .then((result) => {
        alert(`Welcome😊 ${result.user.displayName} `);
        navigate("/posts");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <>
      <button
        onClick={handleLogInWithGoogle}
        className="flex items-center justify-center gap-3 font-bold text-cyan-200 text-lg  bg-gray-900 p-3 rounded-lg hover:text-cyan-500 hover:shadow-none ring-0 outline-0 mb-3 mx-auto"
      >
        <FcGoogle className="text-3xl font-bold" /> Sign in With Google
      </button>

      <p className="font-bold flex flex-col items-center mt-8">
        <span>© {thisYear}</span>
        P📀sts App, Inc. All rights reserved. 👌
      </p>
    </>
  );
};

export default Login;
