import React from "react";
import MessageItem from "./MessageItem";

const MessageList = ({ messages }) => {
  return (
    <div className="h-[400px] flex flex-col p-3 overflow-y-auto">
      {messages &&
        messages.map((message) => (
          <MessageItem
            key={message._id}
            from={message.from}
            message={message.message}
          />
        ))}
    </div>
  );
};

export default MessageList;
