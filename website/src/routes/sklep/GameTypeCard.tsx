import React from 'react';
import clsx from 'clsx';

interface Game {
    title : string;
    img : string;
    game_id : string | null,
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
        <div className={clsx("card bg-base-100 w-52  mx-auto my-auto", {"shadow-xl": selectedGame, "shadow-inner": !selectedGame})}>
            <figure className="px-10 pt-10">
            <img
                src={img}
                alt="mineCraft"
                className="rounded-xl" />
            </figure>
            <div className="card-body items-center">
            <div className="card-actions">
                <button className="btn btn-ghost" onClick={handleGameChange}>{title}</button>
            </div>
            </div>
        </div>
    );
};

export default GameTypeCard;