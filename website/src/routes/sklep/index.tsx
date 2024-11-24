import { useState } from "react";
import SubscriptionsPage from "./SubscriptionPage";
import CustomizeServer from "./CustomizeServer";
import SummaryOrder from "./SummaryOrder";


export default function Sklep() {
  const [selectedPlan, setSelectedPlan] = useState('nie wybrano');

  const handlePlanSelect = (plan : string) => {
    setSelectedPlan(plan);
  };

  const [serverName, setServerName] = useState<string>('nie wybrano');

  const handleServerNameChange = (name: string) => {
    setServerName(name);
  };
  
  return (
  <div>
    <SubscriptionsPage onPlanSelected={handlePlanSelect} />
    <CustomizeServer selectedPlan={selectedPlan} onServerNameChange={handleServerNameChange}/>    
    <SummaryOrder serverName={serverName} selectedPlan={selectedPlan}/>
  </div>
  );
};