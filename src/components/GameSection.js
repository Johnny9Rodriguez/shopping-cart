import React, { useEffect, useState } from 'react'
import { GameCard } from './GameCard';

export const GameSection = () => {
    const [gameData, setGameData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data/games.json');
                const data = await response.json();
                setGameData(data);
            } catch (error) {
                console.error('Error fetching JSON data:', error.message);
            }
        }

        fetchData();
    }, []);

  return (
    <div className='game-section'>
        {gameData.map((game) => (
            <GameCard key={game.id} props={game} />
        ))}
    </div>
  )
}
