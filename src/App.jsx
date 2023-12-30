import { Route, Routes, BrowserRouter } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import NavBar from "./Layouts/NavBar";
import WatchPage from "./Components/WatchPage";

function App() {
  return (
    <BrowserRouter>
      <div className=" bg-primaryBgColor h-screen overflow-hidden  ">
        <NavBar />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/watch/:videoID" element={<WatchPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
