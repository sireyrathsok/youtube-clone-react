import { Route, Routes, BrowserRouter } from "react-router-dom";
import VideoPage from "./Layouts/VideoPage";
import Homepage from "./Components/Homepage/Homepage";
import NavBar from "./Layouts/NavBar";
import TestTest from "./Components/Homepage/TestTest";
import Watch from "./Components/WatchPage";

function App() {
  return (
    <BrowserRouter>
      <div className=" bg-primaryBgColor h-screen overflow-hidden  ">
        <NavBar />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/watch/:id" element={<VideoPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
