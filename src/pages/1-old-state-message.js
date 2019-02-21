import React from 'react';
import Layout from '../components/Layout';
import '../styles/styles.css';

class OldStateMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }

  setMessage = (e) => {
    this.setState({ message: e.target.value });
  };

  render() {
    const { message } = this.state;

    return (
      <Layout>
        <div style={{ width: '100%' }}>
          <div>
            <b>Type a message:</b>
            <div className="spacer-m" />
            <div>
              <input className="input" type="text" value={message} onChange={this.setMessage} />
            </div>
          </div>
          <hr className="thick-rule" />
          <div>
            <b>Your Message:</b>
            <div className="spacer-sm" />
            <div className="blue">{message.length > 0 ? message : <i>...silence</i>}</div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default OldStateMessage;
