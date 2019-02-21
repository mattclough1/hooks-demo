import React from 'react';
import '../styles/styles.css';

class OldCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.increment();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  increment = () => {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  };

  render() {
    const { count } = this.state;

    return (
      <div style={{ width: '100%' }}>
        <div>
          <b>Current Count:</b>
          <div className="spacer-sm" />
          <div className="blue">{count}</div>
        </div>
      </div>
    );
  }
}

export default OldCounter;
