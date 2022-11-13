import React from "react";

const MessageItem = ({ message, from }) => {
  return (
    <div
      className={`flex w-full ${
        from === "You" ? "justify-end" : "justify-start"
      } `}
    >
      <div
        className={`${
          from === "You" ? "bg-primary" : "bg-white"
        } w-1/2 m-3 text-black p-3 rounded-xl`}
      >
        {message}
      </div>
    </div>
  );
};

export default MessageItem;
