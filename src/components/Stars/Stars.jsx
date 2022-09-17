import { useState, useEffect } from "react";

import PropTypes from "prop-types";

// sito-components
import SitoContainer from "sito-container";

const Stars = (props) => {
  const { show } = props;

  const [shadow, setShadow] = useState("");

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    const STAR_COUNT = 600;
    let result = "";
    for (let i = 0; i < STAR_COUNT; i++) {
      result += `${randomNumber(-100, 100)}vw ${randomNumber(
        -100,
        100
      )}vh ${randomNumber(0, 1)}px ${randomNumber(0, 1)}px #fff,`;
    }
    setShadow(result.substring(0, result.length - 1));
  }, []);

  return (
    <SitoContainer
      sx={{
        transition: "opacity 15000ms linear",
        opacity: show ? 1 : 0,
        position: "fixed",
        top: "50%",
        left: "50%",
        height: "1px",
        width: "1px",
        backgroundColor: "#fff",
        borderRadius: "50%",
        boxShadow: shadow,
      }}
    />
  );
};

Stars.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default Stars;
