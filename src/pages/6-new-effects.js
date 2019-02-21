import React, { useState } from 'react';
import Layout from '../components/Layout';
import NewCounter from '../components/NewCounter';
import '../styles/styles.css';

const NewEffects = () => {
  const [message, setMessage] = useState('');

  return (
    <Layout>
      <NewCounter />
    </Layout>
  );
};

export default NewEffects;
