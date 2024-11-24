import React, { useState } from 'react';
import GameTypeCard from './GameTypeCard';
import minecraftSrc from "../../assets/server/minecraft.png"
import SelectVersion from './SelectVersion';

interface CustomizeServerProps {
  selectedVersion: string;
  selectedPlan: string;
  selectedGame: string;
  onServerNameChange: (name: string) => void;
  onGameChange: (gameId: string) => void;
  onVersionChange: (gameVersion: string) => void;
}

const CustomizeServer: React.FC<CustomizeServerProps> = ({ selectedPlan, onServerNameChange, onGameChange, onVersionChange }) => {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  const handleSelectedGame = (gameId: string) => {
    setSelectedGame(gameId);
    onGameChange(gameId);
  };

  const [serverName, setServerName] = useState<string>(''); 

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setServerName(event.target.value);
    onServerNameChange(event.target.value);
  };

  const [selectedVersion, setGameVersion] = useState<string>('');

  const handleVersionChange = (version: string) => {
    setGameVersion(version);
    onVersionChange(version);
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="h-5/6 w-2/3 grid grid-rows-12 grid-cols-4 gap-x-16 gap-y-4">
        <div className="row-span-1 col-span-4">
          <h1 className="text-left text-2xl mx-2 mb-6"> Plan: <span className="font-bold">{selectedPlan}</span> </h1>
        </div>
        
        {/* Nazwa serwera */}
        <div className="row-span-4 col-span-2">
          <h2 className="text-2xl mx-2 my-4">Nazwij serwer: </h2>
          <label className="form-control w-full max-w-xs">
            <input type="text" placeholder="example.0.1" className="input input-bordered w-full max-w-xs" 
              value={serverName}
              onChange={handleInputChange} />
            <div className="label">
              <span className="label-text-alt">min. 8 znaków</span>
            </div>
          </label>
        </div>
        
        {/* Wybór gry */}
        <div className="row-span-1 col-span-2">
          <h2 className="text-2xl mx-4 my-4">Wybierz grę: </h2> 
        </div>
        
        <div className="row-span-7 col-span-2">
          <div className="flex gap-4 mt-8 items-center">
            <GameTypeCard 
              title="Minecraft"
              img={minecraftSrc}
              game_id={selectedVersion}
              onGameChange={handleSelectedGame} />
          </div>
        </div>

        {/* Wybór wersji */}
        <div className="row-span-4 col-span-2 my-4"> 
          <SelectVersion
            onVersionChange={handleVersionChange}
          />
        </div>

        <div className="row-span-2 col-span-2 my-auto"> 
          <button className="btn btn-outline btn-accent">Podsumowanie</button>
        </div>
      </div>
    </div>
  );
};

export default CustomizeServer;
