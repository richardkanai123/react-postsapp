import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ProfileHeader = ({ currentUser }) => {
  return (
    <>
      <section className="w-full p-1 flex items-center justify-around gap-2 align-middle flex-wrap cursor-none">
        <div className="flex font-bold gap-3 items-center align-middle bg-slate-500 p-3 rounded-md w-full text-center justify-center md:w-fit h-fit md-full">
          <FaUserAlt className="text-sky-900 text-2xl" />
          <p className="text-cyan-900">{currentUser.displayName}</p>
        </div>
        <div className="flex font-bold gap-3 items-center align-middle bg-slate-500 p-3 rounded-md w-full text-center justify-center md:w-fit h-fit md-full">
          <MdEmail className="text-sky-900 text-2xl" />
          <p className="text-cyan-900 text-lg">Email: {currentUser.email}</p>
        </div>
      </section>
    </>
  );
};

export default ProfileHeader;
