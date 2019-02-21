import React from 'react';
import PropTypes from 'prop-types';
import '../styles/base.css';

const Layout = ({ children }) => (
  <div>
    <main className="main">{children}</main>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
