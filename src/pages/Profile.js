/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect, useState } from "react";
import PostsEdit from "../Components/PostsEdit";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { mydb } from "../utils/firebase";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import ProfileHeader from "../Components/ProfileHeader";

const Profile = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [userPosts, setUserPosts] = useState([]);
  useEffect(() => {
    if (user) {
      getAllPosts();
    } else if (user === null) {
      navigate("/");
    }
  }, []);

  // posts for current user
  const postsRef = query(
    collection(mydb, "posts"),
    orderBy("dateTime", "desc"),
    where("WriterId", "==", user.uid)
  );

  const getAllPosts = async () => {
    await getDocs(postsRef).then((data) => {
      setUserPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  };

  if (user === null) {
    navigate("/posts");
  }

  if (user)
    return (
      <div className="flex flex-col mt-2 items-center justify-center gap-2 align-middle">
        <ProfileHeader currentUser={user} />
        <section className="w-full h-fit p-2 flex flex-wrap justify-evenly align-middle gap-3">
          {userPosts.map((post) => (
            <PostsEdit
              key={post.id}
              title={post.title}
              dateTime={post.dateTime.toDate().toDateString()}
              body={post.body}
              postID={post.id}
            />
          ))}
        </section>
      </div>
    );
};

export default Profile;
