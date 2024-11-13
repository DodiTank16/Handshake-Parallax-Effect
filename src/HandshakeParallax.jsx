import React, { useEffect, useState } from "react";
import "./assets/HandshakeParallax.css";
import Righthand from "./assets/images/RightHand.png";
import Lefthand from "./assets/images/LeftHand.png";

const HandshakeParallax = () => {
  const [progress, setProgress] = useState(45);

  const handleWheel = (event) => {
    if (event.deltaY > 0 && progress < 85) {
      setProgress((prev) => Math.min(prev + 5, 85));
    } else if (event.deltaY < 0 && progress > 0) {
      setProgress((prev) => Math.max(prev - 5, 0));
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, [progress]);

  const leftHandStyle = {
    transform: `translateX(${Math.max(-50 + progress, 0)}vw)`,
  };

  const rightHandStyle = {
    transform: `translateX(${Math.min(50 - progress, 0)}vw)`,
  };

  return (
    <div className="parallax-container">
      <img
        src={Righthand}
        alt="Left Hand"
        className="hand left-hand"
        style={leftHandStyle}
      />

      <img
        src={Lefthand}
        alt="Right Hand"
        className="hand right-hand"
        style={rightHandStyle}
      />

      {progress >= 85 && (
        <div className="handshake-text">
          <h1>Handshake Achieved!</h1>
        </div>
      )}
    </div>
  );
};

export default HandshakeParallax;
