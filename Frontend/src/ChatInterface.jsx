import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from './component/Avatar';

const ChatInterface = () => {
    const [isUserTalking, setIsUserTalking] = useState(false);
    const [isBotTalking, setIsBotTalking] = useState(false);
    const [isCameraOn, setIsCameraOn] = useState(false);
    const userVideoSrc = "path/to/user-video.mp4";
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setIsBotTalking((prev) => !prev);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setIsUserTalking(true);
            setTimeout(() => {
                setIsUserTalking(false);
            }, 2000);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    const toggleCamera = () => setIsCameraOn(!isCameraOn);

    const handlePresent = () => {
        navigate('/presentvideo');
    };

    return (
        <div className="flex items-center justify-between h-screen px-8">
            { }
            <div className="flex justify-around w-1/2">
                <Avatar isUser={false} isTalking={isBotTalking} />
            </div>

            { }
            <div className="flex justify-around w-1/2">
                <Avatar isUser={true} videoSrc={userVideoSrc} isTalking={isUserTalking} isCameraOn={isCameraOn} />
            </div>

            { }
            <button
                className="absolute bottom-4 right-32 px-4 py-2 text-black bg-white rounded-lg hover:bg-gray-100 transition"
                onClick={toggleCamera}
            >
                {isCameraOn ? 'Turn Camera Off' : 'Turn Camera On'}
            </button>

            { }
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