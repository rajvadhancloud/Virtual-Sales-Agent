import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Avatar from './component/Avatar'; 
import videoSrc from './assets/sample-video.mp4'; 

const PresentVideo = () => {
    const navigate = useNavigate(); 

    const handleProductDemoClick = () => {
        navigate('/product-demo'); 
    };

    return (
        <div className="flex justify-center items-center h-screen">
        
            <div className="border-double border-4 border-white w-[80%] h-[80%] rounded-lg shadow-2xl flex flex-col justify-between p-2">

                <div className="flex-1 flex justify-center items-center">
                    <video
                        src={videoSrc}
                        controls
                        className="w-[70%] object-cover rounded-lg"
                    />
                </div>

                <div className="w-full flex justify-center items-center space-x-6 py-2">
                 
                    <Avatar
                        isUser={false}
                        isTalking={true}
                        isCameraOn={false}
                        avatarSize="w-24 h-24" 
                    />

                    <Avatar
                        isUser={true}
                        isTalking={false}
                        isCameraOn={false} 
                        videoSrc={videoSrc}
                        avatarSize="w-24 h-24" 
                    />
                </div>
            </div>
        </div>
    );
};

export default PresentVideo;