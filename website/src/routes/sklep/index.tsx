import { useState } from "react";
import SubscriptionsPage from "./SubscriptionPage";
import SummaryOrder from "./SummaryOrder";
import plans from './Plans.tsx';
import { sleep } from "../../utils/asyncUtils.ts";
import CustomizeServer from "./CustomizeServer.tsx";

type PlanType = keyof typeof plans;

export default function Sklep() {
  const [selectedPlan, setSelectedPlan] = useState('nie wybrano');
  const [serverName, setServerName] = useState('nie wybrano');
  const [selectedGame, setSelectedGame] = useState('nie wybrano');
  const [gameVersion, setGameVersion] = useState('nie wybrano');
  const [showSummary, setShowSummary] = useState(false);

  const sleepAndScroll = async (h: number) => {
    await sleep(200);
    window.scrollTo({
      top: h,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <SubscriptionsPage onPlanSelected={(plan: PlanType)=>{
        setSelectedPlan(plan);
        sleepAndScroll(window.innerHeight)
      }} />
      <CustomizeServer
        showSummary={showSummary}
        selectedVersion={gameVersion}
        onVersionChange={setGameVersion}
        selectedPlan={selectedPlan as PlanType}
        onServerNameChange={setServerName}
        onGameChange={setSelectedGame}
        onSummaryClick={()=>{
          setShowSummary(true);
          sleepAndScroll(document.body.scrollHeight)
        }}
      />
      {showSummary && (
        <SummaryOrder
          serverName={serverName} 
          selectedPlan={selectedPlan as PlanType} 
          selectedGame={selectedGame}
          onVersionChange={setGameVersion}
          selectedVersion={gameVersion}
        />
      )}
    </div>
  );
}
