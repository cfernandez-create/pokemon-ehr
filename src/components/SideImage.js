import React, { useState, useEffect } from 'react';


export default function SideImage() {
    const [spriteUrl, setSpriteUrl] = useState('');

    useEffect(() => {
        const fetchSprite = async () => {
          try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
            const data = await response.json();
            const spriteUrl = data.sprites.front_default;
            setSpriteUrl(spriteUrl);
          } catch (error) {
            console.error('Error fetching Pikachu sprite:', error);
          }
        };
    
        fetchSprite();
      }, []);
    
      return (
        <div className='SideImageContainer'> 
          <img src={spriteUrl} alt="Pokemon Sprite" className="pokemon-sprite"/>
        </div>
      );
    }

