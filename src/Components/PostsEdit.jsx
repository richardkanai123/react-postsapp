import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import { Link } from "react-router-dom";
import { mydb } from "../utils/firebase";

const PostsEdit = ({ title, body, dateTime, postID }) => {
  const handleDelete = async (e) => {
    await deleteDoc(doc(mydb, "posts", postID))
      .catch((err) => {
        alert(err);
      })
      .then(() => {
        alert("Post Has Been Deleted");
      })
      .then(() => {
        const postHolder = e.target.parentElement.parentElement.parentElement;
        postHolder.remove();
      });
  };

  return (
    <div
      className=" w-300 flex flex-col bg-green-200 p-1 rounded-md shadow-md 
    justify-around drop-shadow gap-1"
    >
      <section className="flex justify-between align-middle items-center rounded p-1 border-b border-sky-600">
        <p className="text-xs text-green-800 font-light italic">{dateTime}</p>
        <section className=" p-1 flex items-center justify-center align-middle gap-3">
          <button className="p-2 bg-lime-400 rounded-lg text-center text-blue-800 text-lg font-bold">
            <Link to={`/edit/${postID}`}>
              <FaRegEdit />
            </Link>
          </button>
          <button
            onClick={handleDelete}
            className="p-2 bg-lime-400 rounded-lg text-center text-red-800 text-lg font-bold"
          >
            <MdDeleteSweep />
          </button>
        </section>
      </section>
      <section className="w-full  p-1">
        <h2 className="font-bold text-2xl text-teal-900 mb-2">{title}</h2>
        <p className=" text-teal-800 text-lg font-semibold">{body}</p>
      </section>
    </div>
  );
};

export default PostsEdit;
