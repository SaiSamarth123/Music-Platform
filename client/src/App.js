import { Routes, Route, useNavigate } from "react-router-dom";
import { Home, Login } from "./components";
import React, { useEffect, useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  inMemoryPersistence,
  signInWithPopup,
} from "firebase/auth";
import { app } from "./config/firebase.config";

const App = () => {
  const firebaseAuth = getAuth(app);
  const navigate = useNavigate();

  const [auth, setAuth] = useState(
    false || window.localStorage.getItem("auth") === "true"
  );

  useEffect(() => {
    //setIsLoading(true);
    firebaseAuth.onAuthStateChanged((userCred) => {
      if (userCred) {
        userCred.getIdToken().then((token) => {
          console.log(token);
          // window.localStorage.setItem("auth", "true");
          // validateUser(token).then((data) => {
          //   dispatch({
          //     type: actionType.SET_USER,
          //     user: data,
          //   });
          // });
        });
        // setIsLoading(false);
      } else {
        setAuth(false);
        // dispatch({
        //   type: actionType.SET_USER,
        //   user: null,
        // });
        // setIsLoading(false);
        window.localStorage.setItem("auth", "false");
        navigate("/login");
      }
    });
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
