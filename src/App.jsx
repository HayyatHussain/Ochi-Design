import React from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Video from "./components/Video";
import Featured from "./components/Featured";

function App() {
  return (
    <div className="w-full min-h-screen text-white bg-zinc-900">
      <Navbar />
      <Landing />
      <Marquee />
      <About />
      <Video />
      <Featured />
    </div>
  );
}

export default App;
