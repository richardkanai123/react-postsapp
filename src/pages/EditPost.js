/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useState } from "react";
import { updateDoc, doc, getDoc, Timestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { mydb } from "../utils/firebase";
import { FallingLines } from "react-loader-spinner";

const EditPost = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [postBodyLength, setPostBodyLength] = useState(0);
  const [postID] = useState(useParams());
  const navigate = useNavigate();

  const GetSelectedPost = async (idenitier) => {
    const docRef = doc(mydb, "posts", idenitier);
    const docSnap = await getDoc(docRef);
    setPostBody(docSnap.data().body);
    setPostTitle(docSnap.data().title);
  };

  useEffect(() => {
    GetSelectedPost(postID.id);
  }, []);

  const UpdatePost = async (e) => {
    e.preventDefault();
    const docRef = doc(mydb, "posts", postID.id);
    await updateDoc(docRef, {
      title: postTitle,
      body: postBody,
      dateTime: Timestamp.now(),
    })
      .then(() => {
        alert("Post Update Success ✔⬆✔⬆ ");
      })
      .finally(() => {
        navigate("/posts");
      });
  };
  return (
    <>
      <h3 className=" text-xl font-bold mb-3 text-sky-700 text-center">
        Editing Post
      </h3>
      <form
        onSubmit={UpdatePost}
        className="flex flex-col items-center justify-center align-middle bg-green-200 bg-blend-saturation backdrop-blur-md p-6 rounded-xl shadow-md max-w-sm md:w-400"
      >
        <div className="flex flex-col gap-3 items-center justify-center align-middle ">
          <label htmlFor="title" className=" text-blue-900 font-semibold ">
            Title
            <span className="font-light text-red-500">*</span>
          </label>
          <input
            type="text"
            name="title"
            id="title"
            required
            placeholder="Enter Title here (required)"
            className=" w-full mb-2 p-2 rounded-md bg-slate-400 text-white font-semibold placeholder-slate-200 ring-0 outline-none border-none"
            value={postTitle}
            onChange={(e) => {
              setPostTitle(e.target.value);
            }}
          />
        </div>
        <label
          htmlFor="body"
          className="text-blue-900 font-semibold mb-1 text-lg"
        >
          Body
        </label>
        <textarea
          name="body"
          id="body"
          cols="30"
          rows="10"
          required
          placeholder=" Enter the post body here (more than 100 characters)"
          className="mb-2 p-2 rounded-md bg-slate-400 text-white font-semibold placeholder-slate-200 ring-0 outline-none border-none text-center"
          value={postBody}
          onChange={(e) => {
            setPostBody(e.target.value);
            // check if the post body is more than 100 characters
            setPostBodyLength(e.target.value.length);
          }}
        ></textarea>

        {postBodyLength < 50 ? (
          // buttton disbaled until characters >100
          <button
            disabled
            className="flex items-center justify-center gap-3 font-bold text-cyan-200 text-lg p-3 rounded-lg  ring-0 outline-0 mt-3 text-center cursor-not-allowed"
            type="submit"
          >
            <FallingLines
              color="#4fa94d"
              width="50"
              visible={true}
              ariaLabel="falling-lines-loading"
            />
          </button>
        ) : (
          // disable the button

          <button
            className="flex items-center justify-center gap-3 font-bold text-cyan-200 text-lg  bg-green-500 p-3 rounded-lg hover:text-cyan-500 hover:shadow-none ring-0 outline-0 mt-3 text-center cursor-pointer"
            type="submit"
          >
            Update Post
          </button>
        )}
      </form>
    </>
  );
};

export default EditPost;
