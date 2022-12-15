import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const TopHeader = ({ imgUrl, imgAlt }) => {
  const navigate = useNavigate(auth);
  const handleUserSignout = async () => {
    // user log out redirect to login
    await signOut(auth).then(navigate("/")).finally(alert("Bye😉"));
  };

  return (
    <header className="flex align-middle items-center justify-around justify-items-center rounded-lg shadow-lg w-full bg-green-500 p-3">
      <section>
        <Link
          to={"/posts"}
          className="text-xl font-bold text-center text-sky-900"
        >
          Posts
        </Link>
      </section>

      <section className="flex items-center gap-2 justify-between align-middle">
        <Link to={"/newpost"} className="font-semibold underline text-cyan-900">
          New Post
        </Link>
        {/* user avatar should link to profile */}

        <Link to={"/profile"}>
          <img
            src={imgUrl}
            alt={imgAlt}
            width={50}
            height={50}
            className=" rounded-full mx-5 object-cover"
          />
        </Link>

        <button
          onClick={handleUserSignout}
          className="flex items-center justify-center font-semibold text-cyan-400 text-base  bg-gray-800 p-2 rounded-lg hover:text-cyan-500 hover:shadow-none ring-0 outline-0 hover:bg-teal-900"
        >
          Log Out
        </button>
      </section>
    </header>
  );
};

export default TopHeader;
