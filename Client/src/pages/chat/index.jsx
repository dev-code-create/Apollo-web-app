import { useAppStore } from "@/Store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Chat = () => {
  const { userInfo } = useAppStore();
  const navigate = useNavigate();

  const handleBackToProfile = () => {
    navigate("/profile");
  };

  useEffect(() => {
    if (!userInfo.profileSetup) {
      navigate("/profile");
    }
  }, [userInfo, navigate]);
  return (
    <div>
      Chat
      <button
        onClick={handleBackToProfile}
        className="px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded-lg text-white transition-all"
      >
        Back to Profile
      </button>
    </div>
  );
};

export default Chat;
