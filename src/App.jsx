import { useEffect, useState } from "react"
import { Background } from "./components/Background/Background";
import { NavBar } from "./components/NavBar/NavBar";
import { Hero } from "./components/Hero/Hero"
import Bike from './assets/Bike.jpg'
import Van from './assets/Van.jpg'


export const App = () => {
  // creating 3 objects for 3 different images to display text
  let heroData = [
    { text1: "Drive in Comfort ", text2: "Discover New Places!" },
    { text1: "Unleash Adventure", text2: "On Two Wheels!" },
    { text1: "Move with Ease", text2: "Carry More, Go Further!" }
  ]

  //creating userState
  const [heroCount, setHeroCount] = useState(0);
  //to play or pause the video
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHeroCount((count) => (count === 2 ? 0 : count + 1));
    }, 4000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>

      < Background playStatus={playStatus} heroCount={heroCount} />
      <NavBar />
      <Hero heroData={heroData} heroCount={heroCount} setHeroCount={setHeroCount} playStatus={playStatus}
        setPlayStatus={setPlayStatus}
      />
    </div>
  )
}

export default App;