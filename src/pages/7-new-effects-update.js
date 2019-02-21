import React, { useState } from 'react';
import Layout from '../components/Layout';
import NewCounter from '../components/NewCounter';
import '../styles/styles.css';

const NewEffectsUpdate = () => {
  const [message, setMessage] = useState('');

  return (
    <Layout>
      <div style={{ width: '100%' }}>
        <div>
          <b>Type a message:</b>
          <div className="spacer-m" />
          <div>
            <input
              className="input"
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>
        <hr className="thick-rule" />
        <div>
          <b>Your Message:</b>
          <div className="spacer-sm" />
          <div className="blue">{message.length > 0 ? message : <i>...silence</i>}</div>
        </div>
        <hr className="thick-rule" />
        <NewCounter />
      </div>
    </Layout>
  );
};

export default NewEffectsUpdate;
