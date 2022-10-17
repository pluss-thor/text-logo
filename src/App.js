import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontSize: 80,
      lineHeight: window.outerHeight,
      height: window.outerHeight,
      width: window.outerWidth,
    };
  }

  componentDidMount() {
    this.checkFontSize();
  }

  componentDidUpdate() {
    this.checkFontSize();
  }

  checkFontSize = () => {
    if (
      document.getElementById("text").clientWidth > this.state.width ||
      document.getElementById("text").clientHeight > this.state.height
    ) {
      const newFontSize = this.state.fontSize - 2;
      const newState = {
        fontSize: newFontSize,
        lineHeight:
          this.state.height /
          Math.ceil(Math.floor(this.state.height / newFontSize), 1),
      };
      this.setState(newState);
    }
  };

  render() {
    const { font, colour, text, letterSpacing } = this.props;
    const { width, height, fontSize, lineHeight } = this.state;

    return (
      <div id="app" className="App" style={{ width, height }}>
        <p
          id="text"
          style={{
            fontFamily: font,
            color: colour,
            fontSize,
            lineHeight: `${lineHeight}px`,
            letterSpacing,
          }}
        >
          {text}
        </p>
      </div>
    );
  }
}

App.propTypes = {
  font: PropTypes.string,
  colour: PropTypes.string,
  text: PropTypes.string,
  letterSpacing: PropTypes.number,
};

App.defaultProps = {
  font: "Grand Hotel",
  colour: "#4a57b7",
  text: "Community Software House",
  letterSpacing: 0,
};

export default App;
