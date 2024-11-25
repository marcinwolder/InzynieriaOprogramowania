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

  if (selectedGame) {
    console.log(title);
  }

  const handleGameChange = () => {
    onGameChange(title);
  };

  return (
    <button 
      onClick={handleGameChange} 
      className={clsx(
        "card bg-base-100 w-48 mx-auto my-auto transform transition-transform duration-200",
        {"shadow-xl scale-105 bg-accent": selectedGame, "shadow-inner scale-100": !selectedGame },
        "hover:scale-105 hover:shadow-lg"
      )}
    >
      <figure className="px-10 py-10">
        <img
          src={img}
          alt={title}
          className="rounded-xl"
        />
      </figure>
    </button>
  );
};

export default GameTypeCard;
