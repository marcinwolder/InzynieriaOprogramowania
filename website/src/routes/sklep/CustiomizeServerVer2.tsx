import React, { useState } from 'react';
import GameTypeCard from './GameTypeCard';
import minecraftSrc from "../../assets/server/minecraft.png";
import fortniteSrc from "../../assets/server/fortnite.jpg";
import SelectVersion from './SelectVersion';
import plans from './Plans';

type PlanType = keyof typeof plans;

interface CustomizeServerProps {
  showSummary: boolean;
  selectedVersion: string;
  selectedPlan: PlanType;
  onServerNameChange: (name: string) => void;
  onGameChange: (gameId: string) => void;
  onVersionChange: (gameVersion: string) => void;
  onSummaryClick: () => void;
}

const CustomizeServerVer2: React.FC<CustomizeServerProps> = ({
  selectedPlan, onServerNameChange, onGameChange, onVersionChange, onSummaryClick 
}) => {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);
  const [serverName, setServerName] = useState<string>(''); 
  const [validationMessage, setValidationMessage] = useState<string>('');
  const [selectedVersion, setGameVersion] = useState<string>('');

  const handleSelectedGame = (gameId: string) => {
    setSelectedGame(gameId);
    onGameChange(gameId);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setServerName(event.target.value);
    onServerNameChange(event.target.value);
    const value = event.target.value;
    if (value.length < 6 || value.length > 15) {
      setValidationMessage('Nazwa serwera musi mieć od 6 do 15 znaków.');

    } else if (!/^[a-zA-Z0-9.]+$/.test(value)) {
      setValidationMessage('Nazwa serwera może zawierać tylko litery, cyfry i kropki.');
    } else {
      setValidationMessage('');
    }
  };

  const handleVersionChange = (version: string) => {
    setGameVersion(version);
    onVersionChange(version);
  };

  const plan = plans[selectedPlan];
  if (!plan) {
    return <div></div>;
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="h-5/6 w-3/5 grid grid-rows-8 grid-cols-2 gap-x-4 gap-y-4">
        <div className="row-span-1 col-span-1 mt-8">
          <h1 className="text-left text-2xl mx-16 ">
            Plan:
          </h1>
        </div>

        <div className="row-span-1 col-span-1 mt-8">
            <h1 className="text-left text-2xl mx-2 ">
            <span className="font-bold">{selectedPlan}</span>
          </h1>
        </div>

        <div className="row-span-1 col-span-2 mb-auto ">
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
            </table>
            </div>
        </div>

        {/* Nazwa serwera */}
        <div className="row-span-1 col-span-1 my-auto ">
          <h2 className="text-xl mx-16 mb-8">Nazwij serwer: </h2>
        </div>

        <div className="row-span-1 col-span-1 my-auto ">
          <label className="form-control w-full max-w-xs">
            <input
              type="text"
              placeholder="example.0.1"
              className="input input-bordered w-full max-w-xs"
              value={serverName}
              onChange={handleInputChange}
            />
            <div className="label">
              <span className="label-text-alt text-red-5">{validationMessage}</span>
            </div>
          </label>
        </div>

        {/* Wybór gry */}
        <div className="row-span-2 col-span-1 my-auto">
          <h2 className="text-xl mx-16">Wybierz grę: </h2>
        </div>

        <div className="row-span-2 col-span-1 my-auto ">
          <div className="flex gap-4">
            <GameTypeCard
              title="Minecraft"
              img={minecraftSrc}
              game_id={selectedGame}
              onGameChange={handleSelectedGame}
            />
            <GameTypeCard
              title="Fortnite"
              img={fortniteSrc}
              game_id={selectedGame}
              onGameChange={handleSelectedGame}
            />
          </div>
        </div>

        {/* Wybór wersji */}
        <div className="row-span-1 col-span-1 my-auto">
          <h2 className="text-xl mx-16">Wybierz wersję: </h2>
        </div>

        <div className="row-span-1 col-span-1 my-auto">
          <SelectVersion onVersionChange={handleVersionChange} />
        </div>

        <div className="row-span-2 col-span-2 my-auto ml-auto">
          <button className="btn btn-outline btn-accent" onClick={onSummaryClick}>Podsumowanie</button>
        </div>
      </div>
    </div>
  );
};

export default CustomizeServerVer2;
