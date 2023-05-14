import React, { useState } from 'react';

export default function Header() {
 
  return (
    <div className='header'>
        <div className='headerContainer'>
            <h3 className='name-header'>Pikachu</h3>
            <span className='maletag' style={{color:"blue"}}>♂</span>
            <h3 className='lvl-header'>Lvl. 100</h3>
        </div>
            <div className="small-text-container">
                <div className='small-text-left'>
                    <p className='smallText'>Species: Pikachu</p>
                    <p className='smallText'>Trainer: TRNR John</p>
                    <p className='smallText'>MRN: P000002500</p>
                </div>

                <div className='small-text-right'>
                    <p className='smallText'>Type: Electric</p>
                    <p className='smallText'>Height (ft): 1′04″</p>
                    <p className='smallText'>Weight (lbs): 13.2</p>
                </div>
            </div>

    </div>
  
  );
}