import React, { useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import buttonSound from '../assets/retro_beep_01.ogg';
import "./SpeechRecog.css";

const SpeechRecog = ({ onSendTranscript }) => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  
  const listenPressed = () => {
    const audio = new Audio(buttonSound);
    audio.play();
    SpeechRecognition.startListening();
  }

  const resetPressed = () => {
    const audio = new Audio(buttonSound);
    audio.play();
    resetTranscript;
  }

  useEffect(() => {
    if (!listening && transcript) {
      onSendTranscript(transcript);
    }
  }, [listening]);
  
  if (!browserSupportsSpeechRecognition) {
    return (<div style={{display:"flex", justifyContent:"center", color:"white", paddingBottom:"70px", fontFamily:"Tektur" }}>Browser doesn't support speech recognition.</div>);
  }

  return (
    <div>
      <div className="box">
        <button className="button_style" onClick={() => listenPressed()}>Voice Recognition: {listening ? "ON" : "OFF"}</button>
        <button className="button_style" onClick={resetPressed}>Reset</button>
      </div>
      <div style={{display:"flex", justifyContent:"center", color:"white", fontFamily:"Tektur", paddingBottom:"70px" }}>Heard: {transcript}</div>
    </div>
  );
};

export default SpeechRecog;
