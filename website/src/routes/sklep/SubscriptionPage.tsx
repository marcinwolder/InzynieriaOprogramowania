import ServerCard from "./ServerCard";
import React, { useState } from 'react';
import plans from "./Plans";

type PlanType = keyof typeof plans;

interface SubscriptionsPageProps {
    onPlanSelected: (plan: PlanType) => void;
  }

const SubscriptionsPage: React.FC<SubscriptionsPageProps> = ( {onPlanSelected} ) => {
    const [selectedServer, setSelectedServer] = useState<string | null>(null);

    const handleServerSelect = (serverType: PlanType) => {
        onPlanSelected(serverType);
        setSelectedServer(serverType);
};

  return (
    <div className="flex flex-col h-screen w-full -mt-12 items-center justify-center">
        <h1 className="text-2xl mb-4">Wybierz opcję serwera</h1>
        <div className="h-2/3 w-5/6 px-16 flex mt-8 gap-4">
            <div className="h-full w-1/5 mt-4">
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                            <th className="text-l">Specyfikacja</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Procesor</td>
                            </tr>
                            <tr>
                                <td>RAM DDR5</td>
                            </tr>
                            <tr>
                                <td>Dysk SSD</td>
                            </tr>
                            <tr>
                                <td>Limit slotów</td>
                            </tr>
                            <tr>
                                <td>Okres min.</td>
                            </tr>
                            <tr>
                                <td>Lokalizacja</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
                {/* Lite Server */}
                <ServerCard
                planDetails={plans.Lite}
                selectedServer={selectedServer}
                onServerSelect={handleServerSelect}/>
                {/* Standard Server */}
                <ServerCard
                planDetails={plans.Standard}
                selectedServer={selectedServer}
                onServerSelect={handleServerSelect}/>
                {/* Premium Server */}
                <ServerCard
                planDetails={plans.Premium}
                selectedServer={selectedServer}
                onServerSelect={handleServerSelect}/>
                {/* Individual Server */}
                <ServerCard
                planDetails={plans.Individual}
                selectedServer={selectedServer}
                onServerSelect={handleServerSelect}/>
        </div>
    </div>
);
};

export default SubscriptionsPage;