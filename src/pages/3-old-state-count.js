import React from 'react';
import Layout from '../components/Layout';
import '../styles/styles.css';

class OldStateCount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  };

  render() {
    const { count } = this.state;

    return (
      <Layout>
        <div style={{ width: '100%' }}>
          <div>
            <b>Let's Count:</b>
            <div className="spacer-m" />
            <div>
              <button className="input" type="button" onClick={this.increment}>
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
  }
}

export default OldStateCount;
