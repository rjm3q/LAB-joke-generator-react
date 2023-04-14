import React, { useState } from 'react';
import getJoke from '../api/jokeData';
import PropTypes from 'prop-types';

export default function JokeGenny ({joke, btnText}) {
  return (
    <>
      <h1>{joke.setup}</h1>
      <p>{btnText !== 'Get Punchline' ? joke.punchline : ''}</p>
    </>
  );
}

JokeGenny.propTypes = {
  joke:PropTypes.shape({
    setup: PropTypes.string,
    punchline: PropTypes.string,
  }).isRequired,
  btnText: PropTypes.string.isRequired,
};
