import React from 'react';
import PropTypes from 'prop-types';

// this component is exporting a func that will call the api, then apply that info to a btn click
export default function Joker({ joke, btnText }) {
  return (
    <>
      <h1>{joke.setup}</h1>
      <p>{btnText !== 'Get Punchline' ? joke.punchline : ''}</p>
    </>
  );
}
// this is taking the func from above to validate the PropTypes, the  first propTypes is lowercased becuase god doesnt exist
// .shape is used when the returned object is constructed in a certain way 
Joker.propTypes = {
  joke: PropTypes.shape({
    setup: PropTypes.string,
    punchline: PropTypes.string,
  }),
    btnText: PropTypes.string,
};
// this replaces .isRequired if the props are meant to be optional
Joker.defaultProps ={
  joke: {
    setup: 'Default Setup',
    punchline: 'Default Punchline',
  },
  btnText: 'Get A Joke'
};
