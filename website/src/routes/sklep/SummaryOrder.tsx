import React, { useState } from 'react';
import SummaryTable from './SummaryTable';
import plans from './Plans.tsx';
import SummaryIndividualTable from './SummaryIndividualTable.tsx';

type PlanType = keyof typeof plans;

interface SummaryProps {
  serverName: string;
  selectedPlan: PlanType;
  selectedGame: string;
  selectedVersion: string;
  onVersionChange: (version: string) => void;
}

const SummaryOrder: React.FC<SummaryProps> = ({ serverName, selectedPlan, selectedGame, selectedVersion}) => {
  const plan = plans[selectedPlan];
    
    if (!plan) {
        return <div></div>;
    }

    const [individualConfig, setIndividualConfig] = useState<Record<string, string | number>>({});

    const handleConfigurationChange = (
      config: Record<string, string | number> | ((prevConfig: Record<string, string | number>) => Record<string, string | number>)
    ) => {
      setIndividualConfig(config);
    };


    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const validateForm = () => {
      if (!serverName) return "Proszę podać nazwę serwera.";
      if (serverName.length < 6 || serverName.length > 15)
        return "Nazwa serwera musi mieć od 6 do 15 znaków.";
      if (!/^[a-zA-Z0-9.]+$/.test(serverName))
        return "Nazwa serwera może zawierać tylko litery, cyfry i kropki.";
      if (!selectedGame || selectedGame === 'nie wybrano') return "Proszę wybrać grę.";
      if (!selectedVersion || selectedVersion === 'nie wybrano') return "Proszę wybrać wersję gry.";
      if (!selectedPlan) return "Proszę wybrać plan.";
      return null;
    };
  
    const handleBuyClick = () => {
      const validationError = validateForm();
      if (validationError) {
        alert(validationError);
        return;
      }
  
      setErrorMessage(null);
  
      const orderData = {
        name: "MarcinWolder",
        gameName: selectedGame,
        config: {
          server_name: serverName,
          plan: selectedPlan,
          game_version: selectedVersion,
          individualConfig: selectedPlan === "Individual" ? individualConfig : null,
        }
      };
  
      console.log("Order ready for API:", orderData);
  
      alert("Dziękujemy za zakup! Dane zamówienia zostały zapisane.");
    };

    return (
        <div className="flex h-screen items-center justify-center">
        <div className="h-5/6 w-2/3 grid grid-rows-12 grid-cols-2 gap-x-16 gap-y-4">
          <div className="row-span-2 col-span-2 h-full w-full">
            <h1 className="text-2xl my-6">Podsumowanie:</h1>
          </div>
          <div className="row-span-8 col-span-1 h-full w-full">
            {selectedPlan === "Individual" ?
            <SummaryIndividualTable user_id="MarcinWolder"
            selectedPlan={selectedPlan}
            server_name={serverName}
            game_id={selectedGame}
            game_version={selectedVersion}
            onConfigChange={handleConfigurationChange}
            />
            :
            <SummaryTable user_id="MarcinWolder"
            selectedPlan={selectedPlan}
            server_name={serverName}
            game_id={selectedGame}
            game_version={selectedVersion}
            />}
          </div>
  
          <div className="row-span-10 col-span-1 bg-base"></div>
          <div className="row-span-4 col-span-1"></div>
          <div className="row-span-2 col-span-1">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl">Suma:</h1>
              <h1 className="text-2xl">{plans[selectedPlan].price} zł</h1>
            </div>
          </div>
          <div className="row-span-1 col-span-2">
            <div className="flex justify-end">
              <button className="btn btn-lg btn-accent btn-wide" onClick={handleBuyClick}>Kupuję</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SummaryOrder;