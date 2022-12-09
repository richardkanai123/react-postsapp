/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Post from "../Components/Post";
import { mydb } from "../utils/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";

const Postlist = () => {
  const [posts, setPosts] = useState([]);
  // all posts
  const PostsRef = collection(mydb, "posts");
  // posts sorted in desc order of dateTime
  const orderedPosts = query(PostsRef, orderBy("dateTime", "desc"));

  const getAllPosts = async () => {
    const data = await getDocs(orderedPosts);
    setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  const compareDates = (a_date) => {
    let todayDate = new Date().toDateString();
    if (a_date === todayDate) {
      return "Today";
    } else {
      return a_date;
    }
  };

  if (posts.length > 0)
    return (
      <div className="w-full h-fit p-2 flex flex-wrap justify-evenly align-middle gap-3 ">
        {posts.map((post) => (
          <Post
            key={post.id}
            title={post.title}
            body={post.body}
            dateTime={compareDates(post.dateTime.toDate().toDateString())}
            Writer={post.Writer}
          />
        ))}
      </div>
    );
};

export default Postlist;
