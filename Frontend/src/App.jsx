import "./App.css";
import "regenerator-runtime/runtime";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PixelBackground from "./component/PixelBackground";
import WelcomePage from "./WelcomePage";
import NewUser from "./NewUser";
import ExistingUser from "./ExistingUser";
import ChatInterface from "./ChatInterface";
import PresentVideo from "./PresentVideo";
import ProductDemo from "./ProductDemo";
import MakePayment from "./MakePayment";
import "./App.css";
import { RecoilRoot, useRecoilState } from "recoil";
// import SocketComponent from "./SocketComponent";
import { keyState } from "./Atoms";

function App() {
  // const [key, setKey] = useRecoilState(keyState);
  // setKey(Math.round(Math.random() * 100000000000000));

  return (
    <RecoilRoot>
      <Router>
        <div className="relative h-screen w-screen">
          <div className="absolute inset-0 -z-10">
            <PixelBackground />
          </div>
          <div className="relative z-10">
            <Routes>
              <Route path="/" element={<WelcomePage />} />
              <Route path="/new-user" element={<NewUser />} />
              <Route path="/existing-user" element={<ExistingUser />} />
              <Route path="/chat" element={<ChatInterface />} />
              {/* <Route path="/chatComponent" element={<ChatInterface />} /> */}
              <Route path="/presentvideo" element={<PresentVideo />} />
              <Route path="/product-demo" element={<ProductDemo />} />
              <Route path="/make-payment" element={<MakePayment />} />
            </Routes>
          </div>
        </div>
      </Router>
    </RecoilRoot>
  );
}

export default App;
