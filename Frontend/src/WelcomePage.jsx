import React from "react";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
    const navigate = useNavigate();

    const handleNewUser = () => {
        navigate("/new-user");
    };

    const handleExistingUser = () => {
        navigate("/existing-user");
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="border-double border-4 border-white w-[80%] h-[80%] rounded-lg shadow-2xl flex flex-col justify-center items-center p-5">
                <h1 className="text-2xl lg:text-5xl font-bold mb-6 text-white">
                    Welcome to My App!
                </h1>
                <div className="grid grid-rows-2 space-y-4 lg:space-x-4 lg:space-y-0 lg:grid-cols-2">
                    <button
                        onClick={handleNewUser}
                        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                    >
                        New User
                    </button>
                    <button
                        onClick={handleExistingUser}
                        className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                    >
                        Existing User
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WelcomePage;
