import React from 'react';
// import cardItem from '../cardItem';

	var cardList = props => (
	  <div className='container'>
	    <div className='row'>
	      {props.movies.map((movie, index) => (
	        <cardItem key={movie.id} imageClick={props.imageClick} movie={movie} />
	      ))}
	    </div>
	  </div>
	);
	
export default cardList;
