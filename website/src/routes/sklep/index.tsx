import { useState } from "react";
import SubscriptionsPage from "./SubscriptionPage";
import CustomizeServer from "./CustomizeServer";
import SummaryOrder from "./SummaryOrder";
import plans from './Plans.tsx';

type PlanType = keyof typeof plans;

export default function Sklep() {
  const [selectedPlan, setSelectedPlan] = useState('nie wybrano');
  const [serverName, setServerName] = useState('nie wybrano');
  const [selectedGame, setSelectedGame] = useState('nie wybrano');
  const [gameVersion, setGameVersion] = useState('nie wybrano');
  const [showSummary, setShowSummary] = useState(false);
  const [scrollDown, setScrollDown] = useState(false);

  const handlePlanSelect = async (plan: PlanType) => {
    setSelectedPlan(plan);
    await new Promise(resolve => setTimeout(resolve, 200));
    setScrollDown(true);
    window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth',
  });
  };

  const handleServerNameChange = (name: string) => {
    setServerName(name);
  };

  const handleGameChange = (gameId: string) => {
    setSelectedGame(gameId);
  };

  const handleVersionChange = (version: string) => {
    setGameVersion(version);
  };

  const handleSummaryClick = async () => {
    setShowSummary(true);
    await new Promise(resolve => setTimeout(resolve, 200));
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  const validateForm = () => {
    if (!selectedPlan) return "Proszę wybrać plan.";
    if (!selectedGame) return "Proszę wybrać grę.";
    if (serverName.length < 6 || serverName.length > 15)
      return "Nazwa serwera musi mieć od 6 do 15 znaków.";
    if (!/^[a-zA-Z0-9.]+$/.test(serverName))
      return "Nazwa serwera może zawierać tylko litery, cyfry i kropki.";
    if (!gameVersion) return "Proszę wybrać wersję gry.";
    return null;
  };

  

  return (
    <div>
      <SubscriptionsPage onPlanSelected={handlePlanSelect} />
      <CustomizeServer
        showSummary={showSummary}
        selectedVersion={gameVersion}
        onVersionChange={handleVersionChange}
        selectedPlan={selectedPlan as PlanType}
        onServerNameChange={handleServerNameChange}
        onGameChange={handleGameChange}
        onSummaryClick={handleSummaryClick}
      />
      {showSummary && (
        <SummaryOrder
          serverName={serverName} 
          selectedPlan={selectedPlan as PlanType} 
          selectedGame={selectedGame}
          onVersionChange={handleVersionChange}
          selectedVersion={gameVersion}
        />
      )}
    </div>
  );
}
