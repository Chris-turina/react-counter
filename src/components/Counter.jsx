import React from 'react';
import PropTypes from 'prop-types';


function Counter(props){

  function handleUpButton() {
    props.onCounterUp(props.title);
  }

  function handleDownButton() {
    props.onCounterDown(props.title)
  }

    return(
      <div>
        <p>{props.title}</p>
        <h4>{props.number}</h4>
        <button onClick={handleUpButton}>Up</button>
        <button onClick={handleDownButton}>Down</button>
      </div>
    );

}

Counter.PropTypes = {
  number: PropTypes.number
}

export default Counter;
