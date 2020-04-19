import React from 'react';
import Typewriter from 'components/Typewriter';
import Scrollchor from 'react-scrollchor';

class Hero extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="hero-container">
        <Typewriter className="hero-title" text="Kory Prior" />
        <div className="hero-description">
          I am a recent graduate of the CST program in Saskatoon, Saskatchewan. My passion is solving problems,
          creating unique solutions.<br />Check out my{' '}
          <Scrollchor to="#projects">recent projects</Scrollchor> below.
        </div>
      </div>
    );
  }
}

export default Hero;
