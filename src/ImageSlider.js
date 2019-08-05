// your ImageSlider code here!

import React, { Component } from "react";
// import Bomb from "./Bomb.js"

class ImageSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlideIndex: 0
    };
  }

  render() {
    return <div>I am on slide {this.state.currentSlideIndex}</div>;
  }
}

export default ImageSlider;
