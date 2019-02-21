import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import '../styles/styles.css';

const IndexPage = () => (
  <Layout>
    <div>
      <h3>Let's Hooks</h3>
      <div>
        <Link className="wavy-link blue-underline-hover" to="/1-old-state-message/">
          Old Message
        </Link>
        {' | '}
        <Link className="wavy-link blue-underline-hover" to="/2-use-state-message/">
          New Message
        </Link>
      </div>
      <div className="spacer-sm" />
      <div>
        <Link className="wavy-link blue-underline-hover" to="/3-old-state-count/">
          Old Counter
        </Link>
        {' | '}
        <Link className="wavy-link blue-underline-hover" to="/4-use-state-count/">
          New Counter
        </Link>
      </div>
      <div className="spacer-sm" />
      <div>
        <Link className="wavy-link blue-underline-hover" to="/5-old-effects/">
          Old Effects
        </Link>
        {' | '}
        <Link className="wavy-link blue-underline-hover" to="/6-new-effects/">
          New Effects
        </Link>
        {' | '}
        <Link className="wavy-link blue-underline-hover" to="/7-new-effects-update/">
          New Effects w/ Updates
        </Link>
      </div>
      <div className="spacer-sm" />
      <div>
        <Link className="wavy-link blue-underline-hover" to="/8-old-context/">
          Old Context
        </Link>
        {' | '}
        <Link className="wavy-link blue-underline-hover" to="/9-new-context/">
          New Context
        </Link>
      </div>
      <div className="spacer-sm" />
      <div>
        <Link className="wavy-link danger-underline-hover" to="/10-use-reducer/">
          Use Reducer
        </Link>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
