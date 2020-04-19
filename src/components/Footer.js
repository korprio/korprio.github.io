import React from 'react';

class Footer extends React.PureComponent {
  render() {
    return (
      <div className="footer">
        <span>Modified by Kory Prior © {new Date().getFullYear()}</span>
      </div>
    );
  }
}

export default Footer;
