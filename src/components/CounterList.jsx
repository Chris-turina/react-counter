import React from 'react';
import Counter from './Counter';

function CounterList(props) {
  return(
    <div>
      {props.counterArray.map((counter, index) => {
        console.log(counter);
        return (
          <Counter
            onCounterUp={props.onCounterUp}
            onCounterDown={props.onCounterDown}
            title={counter.title}
            number={counter.number}
            key={index}
            />
        )
      }
      )}
    </div>
  );
}

export default CounterList;
