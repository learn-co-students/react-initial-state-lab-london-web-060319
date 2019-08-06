import React from 'react';

//Create a ImageSlider React Component
//These components will need a valid render method to allow our
// tests to import and use them

export default class ImageSlider extends React.Component {

//ts initial state should have a property
// called currentSlideIndex that starts at 0

constructor() {
  super()
  this.state = {
    currentSlideIndex: 0
  }
}
//It should only render out the text 'I am on slide <CURRENT_SLIDE>',
// where <CURRENT_SLIDE> is the value of this.state.currentSlideIndex

render() {
  return (
    <h1>I am on slide {this.state.currentSlideIndex}</h1>
  )
}
}
