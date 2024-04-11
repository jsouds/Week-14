
import React from 'react';
import ReviewList from './ReviewList';
import 'bootstrap/dist/css/bootstrap.min.css';


let e = React.createElement;
let text;
let movie;

export default class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: props.reviews
    }
  }


//could not figure out how to get the movie or text input box via target.value. (wanted to link user input to addReview function in my ReviewList)
  handleClick() {

  }

  handleTextupdate(e) {
    text = e.target.value
  }

  handleTitleupdate(e) {
    movie = e.target.value
  }

  render() {

    // review this movie with input box and submit button
    return React.createElement(
      'div',
      {},
      e('div', {className:'p-2'}, 'Your opinion?'),
      e('div',
        {},
        e('div', {className:'text-secondary'}, 'Review this film:'),
        e('textarea', {className:'d-block w-100', onChange:this.handleTextupdate.bind(this)}, null),
        e('button', {onClick:this.handleClick.bind(this)}, 'Submit')
      ),
      e('div', {}, null)
    );
  }
}