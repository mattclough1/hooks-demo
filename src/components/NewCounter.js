import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../styles/styles.css';

const NewCounter = ({ someProp = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, someProp);

  return (
    <div style={{ width: '100%' }}>
      <div>
        <b>Current Count:</b>
        <div className="spacer-sm" />
        <div className="blue">{count}</div>
      </div>
    </div>
  );
};

NewCounter.defaultProps = {
  someProp: '',
};

NewCounter.propTypes = {
  someProp: PropTypes.string,
};

export default NewCounter;
