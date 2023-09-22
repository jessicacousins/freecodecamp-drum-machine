import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [displayText, setDisplayText] = useState("");

  const playSound = (soundId, soundName) => {
    const audio = document.getElementById(soundId);
    audio.currentTime = 0;
    audio.play();
    setDisplayText(soundName);
  };

  const handleKeyPress = (e) => {
    const key = e.key.toUpperCase();
    const drumPad = document.getElementById(key);
    if (drumPad) {
      playSound(key, drumPad.getAttribute("data-sound"));
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className="container" id="drum-machine" style={{ width: "40rem" }}>
      <h1 className="title-area">Drum Machine</h1>
      <div id="display">{displayText}</div>
      <div className="drum-pads">
        <div className="drum-pad" onClick={() => playSound("Q", "Heater 1")}>
          Q
          <audio
            className="clip"
            id="Q"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
            data-sound="Heater 1"
          ></audio>
        </div>
        <div className="drum-pad" onClick={() => playSound("W", "Heater 2")}>
          W
          <audio
            className="clip"
            id="W"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
            data-sound="Heater 2"
          ></audio>
        </div>
        <div className="drum-pad" onClick={() => playSound("E", "Heater 3")}>
          E
          <audio
            className="clip"
            id="E"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
            data-sound="Heater 3"
          ></audio>
        </div>
        <div className="drum-pad" onClick={() => playSound("A", "Heater 4")}>
          A
          <audio
            className="clip"
            id="A"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
            data-sound="Heater 4"
          ></audio>
        </div>
        <div className="drum-pad" onClick={() => playSound("S", "Clap")}>
          S
          <audio
            className="clip"
            id="S"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
            data-sound="Clap"
          ></audio>
        </div>
        <div className="drum-pad" onClick={() => playSound("D", "Open-HH")}>
          D
          <audio
            className="clip"
            id="D"
            src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
            data-sound="Open-HH"
          ></audio>
        </div>
        <div className="drum-pad" onClick={() => playSound("Z", "Kick-n'-Hat")}>
          Z
          <audio
            className="clip"
            id="Z"
            src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
            data-sound="Kick-n'-Hat"
          ></audio>
        </div>
        <div className="drum-pad" onClick={() => playSound("X", "Kick")}>
          X
          <audio
            className="clip"
            id="X"
            src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
            data-sound="Kick"
          ></audio>
        </div>
        <div className="drum-pad" onClick={() => playSound("C", "Closed-HH")}>
          C
          <audio
            className="clip"
            id="C"
            src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
            data-sound="Closed-HH"
          ></audio>
        </div>
      </div>
    </div>
  );
}

export default App;
