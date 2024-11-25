import React from 'react';
import clsx from 'clsx';

interface Game {
  title: string;
  img: string;
  game_id: string | null;
  onGameChange: (gameId: string) => void;
}

const GameTypeCard: React.FC<Game> = ({
  title,
  img,
  game_id,
  onGameChange
}) => {
  const selectedGame = game_id === title;

  const handleGameChange = () => {
    onGameChange(title);
  };

  return (
    <button 
      onClick={handleGameChange} 
      className={clsx(
        "card bg-base-100 w-1/5 transform transition-transform duration-200",
        {
          "shadow-xl scale-105 bg-accent": selectedGame,
          "shadow-inner scale-100": !selectedGame,
        },
        "hover:scale-105 hover:shadow-lg",
        "h-full" // Karta zajmuje 90% wysokości ekranu
      )}>
      <figure className="px-2 py-2 flex items-center justify-center">
        <img
          src={img}
          alt={title}
          className="rounded-xl object-cover"
        />
      </figure>
    </button>
  );
};

export default GameTypeCard;
