import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const ExistingUser = () => {
    const [selectedOption, setSelectedOption] = useState("");
    const [credential, setCredential] = useState("");
    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState("");
    const [showOtpInput, setShowOtpInput] = useState(false);
    const navigate = useNavigate();

    const handleOptionChange = (option) => {
        setSelectedOption(option);
        setCredential("");
        setPhone("");
        setShowOtpInput(false);
    };

    const handleSendOtp = (e) => {
        e.preventDefault();
        if (selectedOption === "email") {
            console.log("Send OTP to:", credential);
        } else {
            console.log("Send OTP to phone number:", phone);
        }
        setShowOtpInput(true);
    };

    const handleOtpSubmit = (e) => {
        e.preventDefault();
        console.log("OTP Submitted:", otp);

        navigate("/chat");
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="border-double border-4 border-white w-[80%] h-[80%] rounded-lg shadow-2xl p-10 flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold mb-8 text-center text-white">Existing User Login</h1>

                {!showOtpInput ? (
                    <>
                        <div className="flex space-x-4 mb-4">
                            <label className="flex items-center text-white">
                                <input
                                    type="radio"
                                    value="email"
                                    checked={selectedOption === "email"}
                                    onChange={() => handleOptionChange("email")}
                                    className="mr-2"
                                />
                                Email
                            </label>
                            <label className="flex items-center text-white">
                                <input
                                    type="radio"
                                    value="phone"
                                    checked={selectedOption === "phone"}
                                    onChange={() => handleOptionChange("phone")}
                                    className="mr-2"
                                />
                                Phone
                            </label>
                        </div>

                        {selectedOption && (
                            <form onSubmit={handleSendOtp} className="space-y-6">
                                {selectedOption === "email" ? (
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        value={credential}
                                        onChange={(e) => setCredential(e.target.value)}
                                        className="p-4 border border-white rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-gray-300 h-14 text-lg bg-transparent text-white"
                                        required
                                    />
                                ) : (
                                    <PhoneInput
                                        placeholder="Phone Number"
                                        value={phone}
                                        onChange={setPhone}
                                        className="bg-transparent p-4 border border-white rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-gray-300 h-14 text-lg text-white"
                                        required
                                    />
                                )}
                                <button
                                    type="submit"
                                    className="w-full px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-black transition h-14 text-lg"
                                >
                                    Send OTP
                                </button>
                            </form>
                        )}
                    </>
                ) : (
                    <form onSubmit={handleOtpSubmit} className="space-y-6">
                        <input
                            type="text"
                            placeholder="Enter OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            className="p-4 border border-white rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-gray-300 h-14 text-lg bg-transparent text-white"
                            required
                        />
                        <button
                            type="submit"
                            className="w-full px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-black transition h-14 text-lg"
                        >
                            Login
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ExistingUser;