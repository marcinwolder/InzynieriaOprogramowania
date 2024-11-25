import React from 'react';
import plans from './Plans.tsx';

type PlanType = keyof typeof plans;

interface SummaryElements {
    selectedPlan: PlanType;
    user_id : string;
    server_name : string;
    game_id : string;
    game_version : string;
}

const SummaryOrder: React.FC<SummaryElements> = ({
    selectedPlan,
    user_id,
    server_name,
    game_id,
    game_version
}) => {
  const planDetails = plans[selectedPlan];
    return (
        <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Dane</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Użytkownik</td>
              <th>{user_id}</th>
            </tr>
            <tr>
              <td>Plan</td>
              <th>{selectedPlan}</th>
            </tr>
            <tr>
              <td>Gra</td>
              <th>{game_id}</th>
            </tr>
            <tr>
              <td>Wersja</td>
              <th>{game_version}</th>
            </tr>
            <tr>
            <td>Nazwa serwera</td>
            <th>{server_name}</th>
            </tr>
            {planDetails && (
            <>
              <tr>
                <td>Procesor</td>
                <th>{planDetails.cpu}</th>
              </tr>
              <tr>
                <td>RAM</td>
                <th>{planDetails.ram}</th>
              </tr>
              <tr>
                <td>Dysk SSD</td>
                <th>{planDetails.storage}</th>
              </tr>
              <tr>
                <td>Limit slotów</td>
                <th>{planDetails.slots}</th>
              </tr>
              <tr>
                <td>Okres subskrypcji</td>
                <th>{planDetails.duration}</th>
              </tr>
            </>
          )}
          {!planDetails && (
            <tr>
              <td colSpan={2} className="text-red-500">
                Nie znaleziono szczegółów dla wybranego planu.
              </td>
            </tr>
          )}
          </tbody>
        </table>
      </div>
    );
};

export default SummaryOrder;