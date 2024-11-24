import { useState } from "react";
import SubscriptionsPage from "./SubscriptionPage";
import CustomizeServer from "./CustomizeServer";
import SummaryOrder from "./SummaryOrder";
import plans from './Plans.tsx';

type PlanType = keyof typeof plans;

export default function Sklep() {
  const [selectedPlan, setSelectedPlan] = useState('nie wybrano');

  const handlePlanSelect = (plan : PlanType) => {
    setSelectedPlan(plan);
  };

  const [serverName, setServerName] = useState('nie wybrano');

  const handleServerNameChange = (name: string) => {
    setServerName(name);
  };

  const [selectedGame, setSelectedGame] = useState('nie wybrano')

  const handleGameChange = (gameId: string) => {
    setSelectedGame(gameId);
  }
  
  const [gameVersion, setGameVersion] = useState('nie wybrano');

  const handleVersionChange = (version: string) => {
    setGameVersion(version);
  };

  
  return (
  <div>
    <SubscriptionsPage 
      onPlanSelected={handlePlanSelect}
    />
    <CustomizeServer
      selectedVersion={gameVersion}
      onVersionChange={handleVersionChange}
      selectedPlan={selectedPlan} 
      onServerNameChange={handleServerNameChange} 
      selectedGame={selectedGame}
      onGameChange={handleGameChange}
    />    
    <SummaryOrder 
      serverName={serverName} 
      selectedPlan={selectedPlan as PlanType} 
      selectedGame={selectedGame}
      onVersionChange={handleVersionChange}
      selectedVersion={gameVersion}
    />
  </div>
  );
};