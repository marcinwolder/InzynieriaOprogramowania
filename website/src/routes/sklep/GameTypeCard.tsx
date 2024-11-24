import React from 'react';

interface Game {
    title : string;
    img : string;
}

const GameTypeCard: React.FC<Game> = ({
    title,
    img,
}) => {
    return (
        <div className="card bg-base-100 w-52 shadow-xl mx-auto my-auto">
            <figure className="px-10 pt-10">
            <img
                src={img}
                alt="mineCraft"
                className="rounded-xl" />
            </figure>
            <div className="card-body items-center">
            <div className="card-actions">
                <button className="btn btn-ghost">{title}</button>
            </div>
            </div>
        </div>
    );
};

export default GameTypeCard;