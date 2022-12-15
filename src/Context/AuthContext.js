// creating context
import { createContext, useState } from "react";
import Login from "../Components/Login";
import Profile from "../pages/Profile";

export const CurrentLoggedUSerContext = createContext([]);
export const HandleLoggedUSer = () => {
  const [currentLoggedUser, setCurrentLoggedUser] = useState({
    name: "richard",
    id: "36329930",
    school: "Chinga",
  });

  return (
    <CurrentLoggedUSerContext.Provider
      value={[currentLoggedUser, setCurrentLoggedUser]}
    >
      <Login />
      <Profile />
    </CurrentLoggedUSerContext.Provider>
  );
};
