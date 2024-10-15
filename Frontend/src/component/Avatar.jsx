import React from 'react';
import BotImage from '../assets/bot.jpg';
import UserImage from '../assets/user.jpg';

const Avatar = ({ isUser, videoSrc, isTalking, isCameraOn, avatarSize = 'w-32 h-32 lg:w-64 lg:h-64' }) => {
    return (
        <div className={`flex items-center ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
            <div className={`relative ${isUser ? 'mr-4' : 'ml-4'}`}>
                {isUser && isCameraOn ? (
                    <video
                        src={videoSrc} 
                        className={`${avatarSize} rounded-full object-cover shadow-lg ${isTalking ? 'border-4 border-green-500' : ''}`}
                        autoPlay
                        muted
                    />
                ) : isUser ? (
                    <img
                        src={UserImage} 
                        alt="User Avatar"
                        className={`${avatarSize} rounded-full shadow-lg ${isTalking ? 'border-4 border-green-500' : 'border-4 border-white'}`}
                    />
                ) : (
                    <img
                        src={BotImage} 
                        alt="Bot Avatar"
                        className={`${avatarSize} rounded-full shadow-lg ${isTalking ? 'border-4 border-green-500' : 'border-4 border-white'}`}
                    />
                )}
            </div>
        </div>
    );
};

export default Avatar;
