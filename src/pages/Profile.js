/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect, useState } from "react";
import PostsEdit from "../Components/PostsEdit";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { mydb } from "../utils/firebase";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import ProfileHeader from "../Components/ProfileHeader";
import { Comment } from "react-loader-spinner";

const Profile = () => {
  const [user] = useAuthState(auth);
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    getAllPosts();
  }, []);

  // posts for current user
  const postsRef = query(
    collection(mydb, "posts"),
    orderBy("dateTime", "desc"),
    where("WriterId", "==", user.uid)
  );

  // gets all posts by current user
  const getAllPosts = async () => {
    await getDocs(postsRef).then((data) => {
      setUserPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  };

  if (userPosts.length === 0)
    return (
      <Comment
        visible={true}
        height="100"
        width="100"
        ariaLabel="comment-loading"
        wrapperStyle={{}}
        wrapperClass="comment-wrapper"
        color="#BBF7D0"
        backgroundColor="#22C6BF"
      />
    );
  if (userPosts.length > 0)
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
              Posts={userPosts}
              setPosts={setUserPosts}
            />
          ))}
        </section>
      </div>
    );
};

export default Profile;
