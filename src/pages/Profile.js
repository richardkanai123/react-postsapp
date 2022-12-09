import React from "react";
import PostsEdit from "../Components/PostsEdit";

const Profile = () => {
  return (
    <div>
      <section>
        <aside>
          <p>
            No of Posts: <span>12</span>
          </p>
        </aside>
        <aside>
          <h5>Name: Richard Kanai</h5>
          <p>Email: richardkanainjeri@gmail.com</p>
        </aside>
      </section>
      <section>
        <div>
          <PostsEdit
            title={"Title 001"}
            dateTime={new Date().toDateString()}
            body={"So this will be the booodyyyyy"}
          />
        </div>
      </section>
    </div>
  );
};

export default Profile;
