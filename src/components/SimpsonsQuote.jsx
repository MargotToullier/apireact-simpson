import React from 'react';

function SimpsonsQuote({ simpsons }) {
  return (
    simpsons && (
      <div>
        <p>{simpsons[0].quote}</p>
        <p>
          <strong>{simpsons[0].character}</strong>
        </p>
        <img src={simpsons[0].image} alt='photo' />
      </div>
    )
  );
}

export default SimpsonsQuote;
