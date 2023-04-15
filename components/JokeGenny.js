import React from 'react';
import PropTypes from 'prop-types';

//this component is exporting a func that will call the api, then apply that info to a btn click
export default function Joker({ joke, btnText }) {
  return (
    <>
      <h1>{joke.setup}</h1>
      <p>{btnText !== 'Get Punchline' ? joke.punchline : ''}</p>
    </>
  );
}
//
Joker.propTypes = {
  joke: PropTypes.shape({
    setup: PropTypes.string,
    punchline: PropTypes.string,
  }).isRequired,
  btnText: PropTypes.string.isRequired,
};
