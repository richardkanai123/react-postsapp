import React from "react";

const Post = ({ title, body, dateTime, Writer }) => {
  return (
    <div
      className=" w-300 flex flex-col bg-green-200 p-4 rounded-md shadow-md 
    justify-around drop-shadow gap-1"
    >
      <section className="w-full p-1 ">
        <h2 className="font-bold text-2xl text-teal-900 mb-2 border-b border-sky-700">
          {title}
        </h2>
        <p className=" text-teal-800 text-lg font-semibold mb-2">{body}</p>
      </section>
      <section className="flex justify-between align-middle items-center rounded p-1 border-t border-sky-600">
        <p className=" text-green-800 font-light">{Writer}</p>
        <p className="text-xs text-green-800 font-light italic">{dateTime}</p>
      </section>
    </div>
  );
};

export default Post;
