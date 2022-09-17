import PropTypes from "prop-types";

// sito-components
import SitoContainer from "sito-container";

const Square = (props) => {
  const { elevation } = props;

  const elevated = {
    background: "rgb(255,195,0)",
    transform: "translateZ(1em)",
    transformStyle: "preserve-3d",
    "&:before": {
      content: '""',
      background: "rgb(205,145,0)",
      position: "absolute",
      transformOrigin: "100% 100%",
      transform: "rotateX(-90deg) translateY(1em)",
      boxShadow: "inset 0em -0.125em 0.25em rgba(0, 0, 0, 0.1)",
      width: "1em",
      height: "1em",
    },
    "&:after": {
      content: '""',
      background: "rgb(205,145,0)",
      position: "absolute",
      transformOrigin: "100% 100%",
      transform: "rotateY(90deg) translateX(1em)",
      boxShadow: "inset -0.125em 0em 0.25em rgba(0, 0, 0, 0.1)",
      width: "1em",
      height: "1em",
    },
    "&:hover": {
      background: "rgb(255, 255, 0)",
    },
  };

  const normal = {
    width: "1em",
    height: "1em",
    float: "left",
    background: "rgb(255,165,0)",
    transformOrigin: "97% 97%",
    position: "relative",
    boxShadow: "0.125em 0.125em 0.5em rgba(0, 0, 0, 0.09)",
    cursor: "pointer",
    "&:hover": {
      background: "rgb(255, 255, 0)",
    },
  };

  return (
    <SitoContainer
      ignoreDefault
      sx={{ ...normal, ...(elevation ? elevated : {}) }}
    ></SitoContainer>
  );
};

Square.propTypes = {
  elevation: PropTypes.number,
};

export default Square;
