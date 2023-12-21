import { useState, useEffect } from "react";
import NavBar from "./Layouts/NavBar";
import APIFetch from "./api/APIFetch";
import VideoPage from "./Layouts/VideoPage";

function App() {
  return (
    <div className=" bg-primaryBgColor h-screen   ">
      <NavBar />
      <VideoPage />
    </div>
  );
}

export default App;
