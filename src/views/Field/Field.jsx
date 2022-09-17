import { useState, useEffect } from "react";

// sito components
import SitoContainer from "sito-container";

// components
import Square from "../../components/Square/Square";
import Stars from "../../components/Stars/Stars";

// styles
import "./style.css";

const Field = () => {
  const [morning, setMorning] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setMorning(!morning);
    }, 30000);
  }, [morning]);

  return (
    <SitoContainer
      alignItems="center"
      justifyContent="center"
      sx={{
        width: "100vw",
        height: "100vh",
        background: morning ? "#2a80cd" : "#100054",
        transition: "background 15000ms linear",
      }}
    >
      <SitoContainer
        ignoreDefault
        id="plane"
        sx={{
          width: "10em",
          height: "10em",
          margin: "0 auto",
          position: "relative",
          top: "0.25em",
          background: "darkcyan",
          boxShadow: "0.25em 0.25em 1em rgba(0, 0, 0, 0.2)",
          transform: "rotateX(45deg) rotateZ(45deg) translateZ(-1em)",
          transformStyle: "preserve-3d",
        }}
      >
        <Stars show={!morning} />
        <Square elevation={1} />
        <Square elevation={1} />
        <Square elevation={1} />
        <Square elevation={1} />
        <Square elevation={1} />
        <Square />
        <Square elevation={1} />
        <Square elevation={1} />
        <Square elevation={1} />
        <Square elevation={1} />
        <Square elevation={1} />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square elevation={1} />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square elevation={1} />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square elevation={1} />
        <Square />
        <Square />
        <Square />
        <Square elevation={1} />
        <Square elevation={1} />
        <Square elevation={1} />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square elevation={1} />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square elevation={1} />
        <Square />
        <Square />
        <Square />
        <Square elevation={1} />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square elevation={1} />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square elevation={1} />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square elevation={1} />
        <Square elevation={1} />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square elevation={1} />
        <Square elevation={1} />
      </SitoContainer>
    </SitoContainer>
  );
};

export default Field;
