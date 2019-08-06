import React from 'react';

//Create a Bomb React Component
//These components will need a valid render method to allow our
// tests to import and use them

export default class Bomb extends React.Component {

//Its initial state should have a property called secondsLeft.
//The initial value of secondsLeft is set by passing in an initialCount prop to the Bomb component.
//Don't forget to pass the argument props into the constructor (i.e., constructor(props)).

constructor(props){
  super()
  this.state = {
    secondsLeft: props.initialCount
  }
}
//It should render the text '<SECONDS_LEFT> seconds left before I go boom!',
//where <SECONDS_LEFT> is the value of secondsLeft.
//if secondsLeft equals 0, it should render 'Boom!' instead.

render() {
  const renderedText = this.state.secondsLeft === 0
  ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`
  return (
    <div>{renderedText}</div>
  )
}
}
