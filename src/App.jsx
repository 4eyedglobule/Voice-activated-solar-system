import { useState,useEffect } from 'react'
import DisplayBox from './components/DisplayBox'
import SpeechRecog from './components/SpeechRecog';
import spaceBackground from "./assets/spaceBackground.png"
import './App.css'
import mercuryImage from './assets/mercury.png';
import venusImage from './assets/venus.png';
import earthImage from './assets/earth.png';
import marsImage from './assets/mars.png';
import jupiterImage from './assets/jupiter.png';
import saturnImage from './assets/saturn.png';
import uranusImage from './assets/uranus.png';
import neptuneImage from './assets/neptune.png';

function App() {
  const [showCase,setShowCase] = useState(false);
  const [chosenPlanet, setChosenPlanet] = useState("");
  const planetPictures = {"Mercury": mercuryImage,"Venus":venusImage,"Earth":earthImage,"Mars":marsImage,"Jupiter":jupiterImage,
    "Saturn":saturnImage,"Uranus":uranusImage ,"Neptune":neptuneImage};
  const planetDescriptions = {
    "Mercury":"This planet is Mercury. It is a rocky planet and is closest to the sun. It is the smallest planet in the solar system and has no atmosphere; as such, the temperature on its surface ranges from extremely hot to extremely cold.",
    "Venus":"This planet is Venus. It is a rocky planet and is second closest to the sun. It is very hot and has a thick, acidic, pressurized atmosphere and has many active volcanoes on its surface.",
    "Earth":"This planet is Earth. It is a rocky planet, third closest to the sun and most likely where you live. It is the only planet known to support life, which makes it pretty special.",
    "Mars":"This planet is Mars. It is a rocky planet and is fourth closest to the sun. It has a very thin atmosphere and appears red due to the high amount of iron oxide on its surface.",
    "Jupiter":"This planet is Jupiter. It is a gas giant and is the fourth farthest away from the sun. It's the largest planet in the solar system. Frequent storms occur on its surface.",
    "Saturn":"This planet is Saturn. It is a gas giant and is the third farthest away from the sun. It is most famous for its large rings, which are mostly made of ice and rock with some other materials.",
    "Uranus":"This planet is Uranus. It is an ice giant and is the second farthest away from the sun. Due to its name, it has been the butt of many jokes. It is the coldest planet in the solar system.",
    "Neptune":"This planet is Neptune. It is an ice giant and is the farthest away from the sun. It's cold and the surface is present to extremely powerful winds. ",
  };

  const handleTranscript = (value) => {
      if((value.replace(/[^a-zA-Z]/g, '') in planetPictures) && !showCase){
        setChosenPlanet(value.replace(/[^a-zA-Z]/g, ''));
        setShowCase(true);
      }
      else if(value.replace(/[^a-zA-Z]/g, '') == "Back" && showCase){
        setShowCase(false);
      }
  };

  useEffect(() => {
    document.body.style.background = `url(${spaceBackground}) no-repeat center center fixed`;
    document.body.style.backgroundSize = "cover";
  }, []);

  return (
    <div>
      <div className="app_title">
        VOICE-ACTIVATED SOLAR SYSTEM
      </div>
      {!showCase && <div style={{display:"flex", justifyContent:"center", color:"white", fontFamily:"Tektur" }}>
        Turn on voice recognition and say the name of a planet to see it!
      </div>}
      {showCase && <div style={{display:"flex", justifyContent:"center", color:"white", fontFamily:"Tektur" }}>
        Turn on voice recognition and say "back" to return to the solar system.
      </div>}
      <div>
        <SpeechRecog onSendTranscript={handleTranscript} />
      </div>
      {!showCase && <div className="planet_container">  {/* Hide this when actual planet is */}
        <div><DisplayBox text={"MERCURY"} image_source={mercuryImage} image_scale={0.2} top_margin={"90px"}/></div>
        <div><DisplayBox text={"VENUS"} image_source={venusImage} image_scale={0.5} top_margin={"90px"}/></div>
        <div><DisplayBox text={"EARTH"} image_source={earthImage} image_scale={0.7} top_margin={"90px"}/></div>
        <div><DisplayBox text={"MARS"} image_source={marsImage} image_scale={0.5} top_margin={"90px"}/></div>
        <div><DisplayBox text={"JUPITER"} image_source={jupiterImage} image_scale={3} top_margin={"90px"}/></div>
        <div><DisplayBox text={"SATURN"} image_source={saturnImage} image_scale={3} top_margin={"90px"}/></div>
        <div><DisplayBox text={"URANUS"} image_source={uranusImage} image_scale={1.5} top_margin={"90px"}/></div>
        <div><DisplayBox text={"NEPTUNE"} image_source={neptuneImage} image_scale={1} top_margin={"90px"}/></div>
      </div>}
      {showCase && <div className="planet_showcase">
        <div><DisplayBox text={chosenPlanet.toUpperCase()} image_source={planetPictures[chosenPlanet]} image_scale={9} top_margin={"250px"} font_size={"50px"} /></div>
        <div className="planet_showcase_text"> {planetDescriptions[chosenPlanet]} </div>
      </div>}
    </div>
  )
}

export default App
