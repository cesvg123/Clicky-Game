import React from 'react';
import './CardItem.css';

var CardItem = props => (
  <div onClick={() => props.imageClick(props.movie.id)} className="col-md-3">
    <div className='img-container'>
      <img title={props.movie.name} alt={props.movie.name} src={props.movie.image} className='img-thumbnail'/>
    </div>
  </div>
);

export default CardItem;
