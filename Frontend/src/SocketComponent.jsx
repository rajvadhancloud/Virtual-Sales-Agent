// import { useRecoilState } from "recoil";
// import React, { useEffect, useMemo, useState } from "react";
// import { io } from "socket.io-client";
// import { socketState } from "./Atoms";
// import { useNavigate } from "react-router-dom";

// function SocketComponent() {
//   const [socketId, setSocketId] = useRecoilState(socketState);
//   const navigate = useNavigate();

//   // Set up the socket connection
//   const socket = useMemo(() => {
//     return io("http://localhost:3000", {
//       withCredentials: true,
//     });
//   }, []);

//   useEffect(() => {
//     // Connect to the server and retrieve the socket ID
//     socket.on("connect", () => {
//       setSocketId(socket.id);
//       console.log("Connected with socket ID:", socket.id);
//     });

//     // Handle any connection errors
//     socket.on("connect_error", (error) => {
//       console.error("Connection error:", error);
//     });

//     // Clean up the socket connection when the component unmounts
//     return () => {
//       socket.disconnect();
//     };
//   }, [socket, setSocketId]);

//   useEffect(() => {
//     // Ensure that the socketId is set before navigating
//     if (socketId) {
//       console.log("Navigating to chatComponent with socket ID:", socketId);
//       navigate("/chatComponent");
//     }
//   }, [socketId, navigate]);
// }

// export default SocketComponent;
