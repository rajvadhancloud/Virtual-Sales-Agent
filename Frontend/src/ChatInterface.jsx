import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "./component/Avatar";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { keyState, socketState } from "./Atoms";
import axios from "axios";
import { useRecoilState } from "recoil";

const ChatInterface = () => {
  const [isUserTalking, setIsUserTalking] = useState(false);
  const [isBotTalking, setIsBotTalking] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [userMsg, setUserMsg] = useState("");
  const [botMsg, setBotMsg] = useState("");
  const [sendButton, setSendButton] = useState(false);
  const userVideoSrc = "path/to/user-video.mp4";

  const [id, setId] = useRecoilState(keyState);

  const [data, setData] = useState({
    session_id: id,
    input: "Hi",
  });

  const navigate = useNavigate();

  const toggleCamera = () => setIsCameraOn(!isCameraOn);

  const handlePresent = () => {
    navigate("/presentvideo");
  };

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const [transcriptText, setTranscriptText] = useState();

  useEffect(() => {
    setTranscriptText(transcript);
    setData({ session_id: id, input: transcript });
    const timeoutId = setTimeout(() => {
      setSendButton(true);
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, [transcript]);

  console.log(transcriptText);

  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en" });

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  console.log(data);

  useEffect(() => {
    axios
      .post("https://2q3x90gm-5000.inc1.devtunnels.ms/chat", data)
      .then((response) => {
        console.log(response);
        setBotMsg(response.data.response);
        // setUserMsg("");
        setSendButton(false);
      });
  }, [sendButton]);

  return (
    <div className="flex items-center justify-between h-screen px-8">
      <div className="flex justify-start w-1/2 ml-52">
        <div className="chat chat-start">
          <div className="chat-bubble transform scale-x-[-1] max-w-80">
            <div className="transform scale-x-[-1]">{botMsg}</div>
          </div>
        </div>

        <Avatar isUser={false} isTalking={isBotTalking} />
      </div>

      <div className="flex justify-end w-1/2 mr-60">
        <Avatar
          isUser={true}
          videoSrc={userVideoSrc}
          isTalking={isUserTalking}
          isCameraOn={isCameraOn}
        />
        <div className="chat chat-start">
          <div className="chat-bubble max-w-80">{transcript}</div>
        </div>
      </div>
      <div className=" absolute right-0">
        <form>
          <button
            onClick={() => {
              setIsUserTalking(true);
              startListening();
            }}
            type="button"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Start
          </button>
          <button
            onClick={() => {
              setIsUserTalking(false);
              SpeechRecognition.stopListening();
            }}
            type="button"
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Stop
          </button>
          <button
            onClick={() => {
              setIsUserTalking(false);
              resetTranscript();
            }}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Reset
          </button>
          <button
            type="submit"
            className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
          >
            Send
          </button>
        </form>
      </div>
      <button
        className="absolute bottom-4 right-32 px-4 py-2 text-black bg-white rounded-lg hover:bg-gray-100 transition"
        onClick={toggleCamera}
      >
        {isCameraOn ? "Turn Camera Off" : "Turn Camera On"}
      </button>

      <button
        className="absolute bottom-4 right-4 px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition"
        onClick={handlePresent}
      >
        Present
      </button>
    </div>
  );
};

export default ChatInterface;
