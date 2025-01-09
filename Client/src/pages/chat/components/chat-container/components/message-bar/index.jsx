import { useState } from "react";
import { GrAttachment } from "react-icons/gr";
import { IoSend } from "react-icons/io5";
import { RiEmojiStickerLine } from "react-icons/ri";

const MessageBar = () => {
  const [message, setMessage] = useState("");

  return (
    <div className="h-[10vh] bg-[#1c1d25] flex justify-center items-center px-8 mb-6 gap-6">
      <div className="flex-1 flex bg-[#2a2b33]  rounded-md items-center gap-5 pr-5">
        <input
          type="text"
          className="flex-1 p-5 bg-transparent rounded-md focus:outline-none focus:border-none"
          placeholder="Enter Message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <button className="text-neutral-500 focus:border-none  focus:text-white duration-300 transition-all">
          <GrAttachment className="text-2xl" />
        </button>
        <div className="relative">
          <button className="text-neutral-500 focus:border-none  focus:text-white duration-300 transition-all ">
            <RiEmojiStickerLine className="text-2xl mt-1" />
          </button>
          <div className=" right-0"></div>
        </div>
      </div>
      <button className="bg-[#8417ff] rounded-md flex items-center justify-center p-5 focus:border-none hover:bg-[#741bda] focus:outline-none focus:bg-[#741bda] duration-300 transition-all">
        <IoSend className="text-2xl" />
      </button>
    </div>
  );
};

export default MessageBar;
