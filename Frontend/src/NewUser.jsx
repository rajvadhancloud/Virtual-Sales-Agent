import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const NewUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log("New User Data:", { name, email, phone });
        
        setName("");
        setEmail("");
        setPhone("");

        navigate("/chat");
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="border-double border-4 border-white w-[80%] h-[80%] rounded-lg shadow-2xl p-10 flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold mb-8 text-center text-white">New User Registration</h1>
                <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-lg">
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="p-4 border border-white rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-gray-300 h-14 text-lg bg-transparent text-white"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="p-4 border border-white rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-gray-300 h-14 text-lg bg-transparent text-white"
                        required
                    />
                    <PhoneInput
                        placeholder="Phone Number"
                        value={phone}
                        onChange={setPhone}
                        className="bg-transparent p-4 border border-white rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-gray-300 h-14 text-lg text-black"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-black transition h-14 text-lg"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default NewUser;
