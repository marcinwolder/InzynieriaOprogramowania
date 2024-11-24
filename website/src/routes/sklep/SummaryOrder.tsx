import React from 'react';
import SummaryTable from './SummaryTable';

interface SummaryProps {
  serverName: string;
  selectedPlan: string;
}

const SummaryOrder: React.FC<SummaryProps> = ({ serverName, selectedPlan }) => {
    return (
        <div className="flex h-screen items-center justify-center">
        <div className="h-5/6 w-2/3 grid grid-rows-12 grid-cols-2 gap-x-16 gap-y-4">
          <div className="row-span-2 col-span-2 h-full w-full">
            <h1 className="text-2xl my-6">Podsumowanie:</h1>
          </div>
          <div className="row-span-8 col-span-1 h-full w-full"> 
            <SummaryTable user_id="MarcinWolder"
            selectedPlan={selectedPlan}
            server_name={serverName}
            game_id="minecraft"
            />
          </div>
  
          <div className="row-span-10 col-span-1 bg-base"></div>
          <div className="row-span-4 col-span-1"></div>
          <div className="row-span-2 col-span-1">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl">Suma:</h1>
              <h1 className="text-2xl">dużo; zł</h1>
            </div>
          </div>
          <div className="row-span-1 col-span-2">
            <div className="flex justify-end">
              <button className="btn btn-lg btn-accent btn-wide">Kupuję</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SummaryOrder;