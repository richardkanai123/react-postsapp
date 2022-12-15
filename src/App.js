import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Login from "./Components/Login";
import Addnewpost from "./pages/Addnewpost";
import NotFoundelement from "./pages/NotFoundelement";
import Postlist from "./pages/Postlist";
import { auth } from "./utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import TopHeader from "./Components/TopHeader";
import Profile from "./pages/Profile";
import { useEffect } from "react";

function App() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/posts");
    } else {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className=" min-w-full min-h-screen max-h-fit p-2 flex flex-col items-center justify-center align-middle justify-items-center gap-2 bg-green-300">
      {user ? (
        <TopHeader imgUrl={user.photoURL} imgAlt={user.displayName} />
      ) : (
        <Link
          to={"/"}
          className=" font-extrabold
      text-2xl text-sky-600"
        >
          Posts App
        </Link>
      )}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/posts" element={<Postlist />} />
        <Route path="/newpost" element={<Addnewpost />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFoundelement />} />
      </Routes>
    </div>
  );
}

export default App;
