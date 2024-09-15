import React, { useEffect } from "react";

function ChatMessage({ name, message }) {
  return (
    <div className="flex items-center p-2 gap-2">
      <img
        className="h-9"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvgfd6ebm7aL_5Zd1X6UvEG6heRZTh3PHrkA&s"
        alt="user-icon"
      />
      <span className="font-bold">{name}</span>
      <span>{message}</span>
    </div>
  );
}

export default ChatMessage;
