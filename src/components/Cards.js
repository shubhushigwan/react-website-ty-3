import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check Out Our Family Restaurant Service!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img1.jpg'
              text='Live With The Greenery Nature'
              label='Nature'
              path='/services'
            />
            <CardItem
              src='images/img2.jpg'
              text='Top Luxury Rooms'
              label='Rooms'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img3.jpg'
              text='Best Konkani Style Food'
              label='Food'
              path='/services'
            />
            <CardItem
              src='images/img4.jpg'
              text='Arrangments Of Dining Tables'
              label='Arrangments'
              path='/contacts'
            />
            <CardItem
              src='images/img5.jpg'
              text='Enjoy The Adventure With Family'
              label='Adventure'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;