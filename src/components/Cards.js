import React from 'react';
import Carditem from './Carditem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
           <h1>Check Out Our Most Loved Products </h1> 
           <div className='cards__container'>
             <div className='cards__wrapper'>
                <ul className='cards__items'>
                   
                    <Carditem 
                    src='images/img-9.jpg'
                    text='Fall 2021 womenswear collection'
                    label='Womenswear'
                    path='/products'
                    />

                    <Carditem 
                    src='images/img-4.jpg'
                    text='Fall 2021 menswear collection'
                    label='Menswear'
                    path='/products'
                    />

                </ul>
             </div>
           </div>
        </div>
    );
}

export default Cards;

