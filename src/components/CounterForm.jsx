import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function CounterForm(props) {
  let _title = null;

  function handleNewCounterSubmission(event) {
    event.preventDefault();
    props.onNewCounterCreation({title: _title.value, number: 0, id: v4()});
    _title.value = '';
  }

  return(
    <div>
      <form onSubmit={handleNewCounterSubmission}>
        <input type='text'
          placeholder='title'
          ref={(input) => {_title = input;}}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

CounterForm.propTypes = {
  onNewCounterCreation: PropTypes.func
};

export default CounterForm;
