import React from 'react';
import PropTypes from 'prop-types';


function Counter(props){

  function handleUpButton() {
    props.onCounterUp(props.id);
  }

  function handleDownButton() {
    props.onCounterDown(props.id);
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
  number: PropTypes.number,
  title: PropTypes.string,
  onCounterUp: PropTypes.func,
  onCounterDown: PropTypes.func
};

export default Counter;
