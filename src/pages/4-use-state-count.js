import React, { useState } from 'react';
import Layout from '../components/Layout';
import '../styles/styles.css';

const UseStateCount = () => {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <div style={{ width: '100%' }}>
        <div>
          <b>Let's Count:</b>
          <div className="spacer-m" />
          <div>
            <button
              className="input"
              type="button"
              onClick={() => setCount((prevCount) => prevCount + 1)}
            >
              Click It
            </button>
          </div>
        </div>
        <hr className="thick-rule" />
        <div>
          <b>Current Count:</b>
          <div className="spacer-sm" />
          <div className="blue">{count}</div>
        </div>
      </div>
    </Layout>
  );
};

export default UseStateCount;
