import React from 'react';
import clsx from 'clsx';

interface Game {
    title : string;
    img : string;
    isSelected : boolean;
    onClick : () => void;
}

const GameTypeCard: React.FC<Game> = ({
    title,
    img,
    isSelected,
    onClick,
}) => {
    return (
        <div className={clsx("card bg-base-100 w-52  mx-auto my-auto", {"shadow-xl": isSelected, "shadow-inner": !isSelected})}>
            <figure className="px-10 pt-10">
            <img
                src={img}
                alt="mineCraft"
                className="rounded-xl" />
            </figure>
            <div className="card-body items-center">
            <div className="card-actions">
                <button className="btn btn-ghost" onClick={onClick}>{title}</button>
            </div>
            </div>
        </div>
    );
};

export default GameTypeCard;