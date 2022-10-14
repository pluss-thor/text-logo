import PropTypes from "prop-types";
import "./App.css";

function App({ font, colour, text, letterSpacing }) {
  let fontSize = "60vh";
  let lineHeight = "100vh";
  if (text.length < 5) {
    fontSize = "80vh";
  } else if (text.length > 12) {
    fontSize = "40vh";
    lineHeight = "50vh";
  }
  return (
    <div className="App">
      <p
        style={{
          fontFamily: font,
          color: colour,
          fontSize,
          lineHeight,
        }}
      >
        {text}
      </p>
    </div>
  );
}

App.propTypes = {
  font: PropTypes.string,
  colour: PropTypes.string,
  text: PropTypes.string,
};

App.defaultProps = {
  font: "Merriweather",
  colour: "#ff6969",
  text: "Community",
};

export default App;
