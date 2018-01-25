import React from 'react';
import Counter from './Counter';
import PropTypes from 'prop-types';

function CounterList(props) {
  return(
    <div>
      {props.counterArray.map((counter) => {
        console.log(counter);
        return (
          <Counter
            onCounterUp={props.onCounterUp}
            onCounterDown={props.onCounterDown}
            title={counter.title}
            number={counter.number}
            id={counter.id}
          />
        );
      }
      )}
    </div>
  );
}

CounterList.propTypes = {
  counterArray: PropTypes.array,
  onCounterUp: PropTypes.func,
  onCounterDown: PropTypes.func
};

export default CounterList;
