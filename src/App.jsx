import { useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import NavBar from "./sections/NavBar";
import Hero from "./sections/Hero";
import FirstVideo from "./sections/FirstVideo";
import Jason from "./sections/Jason";
import SecondVideo from "./sections/SecondVideo";
import Lucia from "./sections/Lucia";
import PostCard from "./sections/PostCard";
import Final from "./sections/Final";
import Outro from "./sections/Outro";
import PreLoader from "./components/PreLoader";

gsap.registerPlugin(ScrollTrigger);



const App = () => {
  const [ready, setReady] = useState(false);

  return (
    <>
      {!ready && <PreLoader onFinish={() => setReady(true)} />}
      <main className={ready ? "" : "opacity-0"}>
        <NavBar />
        <Hero />

        <FirstVideo />
        <Jason />

        <SecondVideo />
        <Lucia />

        <PostCard />
        <Final />

        <Outro />
      </main>
    </>
  );
};

export default App;