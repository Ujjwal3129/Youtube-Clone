import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addmessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

function LiveChat() {
  const dispatch = useDispatch();

  const chatMessage = useSelector((store) => store.chat.message);
  const [liveMessage, setLiveMessage] = useState("");

  useEffect(() => {
    const i = setInterval(() => {
      console.log("Hello");

      dispatch(
        addmessage({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
    }, 2000);
    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="h-[600px] rounded-lg w-full  ml-2 p-2 overflow-y-scroll flex  flex-col-reverse border border-black">
        <div>
          {chatMessage.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          
          dispatch(addmessage({
            name:"Ujjwal Kumar",
            message:liveMessage,
          }))
          setLiveMessage("")
        }}
      >
        <input
          className="w-91 border-red-200"
          type="text"
          placeholder="live Comments"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-2 mx-2 bg-green-400 text-white rounded-md">
          Send{" "}
        </button>
      </form>
    </>
  );
}

export default LiveChat;
