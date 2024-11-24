import React from 'react';

interface SummaryElements {
    selectedPlan: string;
    user_id : string;
    server_name : string;
    game_id : string
}

const SummaryOrder: React.FC<SummaryElements> = ({
    selectedPlan,
    user_id,
    server_name,
    game_id
}) => {
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
            <td>Nazwa serwera</td>
            <th>{server_name}</th>
            </tr>
            <tr>
              <td>Procesor</td>
              <th>2 x 3.6 GHz</th>
            </tr>
            <tr>
              <td>RAM</td>
              <th>4 GB</th>
            </tr>
            <tr>
              <td>Dysk SSD</td>
              <th>20 GB</th>
            </tr>
            <tr>
              <td>Limit slotów</td>
              <th>5</th>
            </tr>
            <tr>
              <td>Okres subskrypcji</td>
              <th>2 tyg.</th>
            </tr>
            <tr>
              <td>Lokalizacja serwera</td>
              <th>Polska</th>
            </tr>
          </tbody>
        </table>
      </div>
    );
};

export default SummaryOrder;