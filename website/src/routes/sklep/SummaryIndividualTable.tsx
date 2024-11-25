import React from 'react';
import plans from './Plans.tsx';

type PlanType = keyof typeof plans;

interface SummaryElements {
  selectedPlan: PlanType;
  user_id: string;
  server_name: string;
  game_id: string;
  game_version: string;
}

const SummaryIndividualTable: React.FC<SummaryElements> = ({
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
          {planDetails ? (
            <>
              <tr>
                <td>Procesor</td>
                <th>
                  <select className="select select-ghost w-full max-w-xs select-sm">
                  <option disabled selected={true}>{planDetails.cpu}</option>
                    <option value='2'>2 x 3.6 GHz</option>
                    <option value='4'>4 x 3.6 GHz</option>
                    <option value='6'>6 x 3.6 GHz</option>
                    <option value='8'>8 x 3.6 GHz</option>
                    <option value='10'>10 x 3.6 GHz</option>
                  </select>
                </th>
              </tr>
              <tr>
                <td>RAM</td>
                <th>
                    <select className="select select-ghost w-full max-w-xs select-sm">
                        <option disabled selected={true}>{planDetails.ram}</option>
                            <option value='4'>4 GB</option>
                            <option value='8'>8 GB</option>
                            <option value='16'>16 GB</option>
                            <option value='32'>32 GB</option>
                            <option value='64'>64 GB</option>
                    </select>
                </th>
              </tr>
              <tr>
                <td>Dysk SSD</td>
                <th>
                <select className="select select-ghost w-full max-w-xs select-sm">
                    <option disabled selected={true}>{planDetails.storage}</option>
                        <option value='8'>8 GB</option>
                        <option value='16'>16 GB</option>
                        <option value='20'>20 GB</option>
                        <option value='32'>32 GB</option>
                        <option value='64'>64 GB</option>
                        <option value='128'>128 GB</option>
                </select>
                </th>
              </tr>
              <tr>
                <td>Limit slotów</td>
                <th>{planDetails.slots}</th>
              </tr>
              <tr>
                <td>Okres subskrypcji</td>
                <th>
                <select className="select select-ghost w-full max-w-xs select-sm">
                    <option disabled selected={true}>max. {planDetails.duration}</option>
                        <option value='1'>1 tyd..</option>
                        <option value='2'>2 tyg.</option>
                        <option value='3'>3 tyg.</option>
                        <option value='4'>1 mies.</option>
                        <option value='6'>1,5 mies.</option>
                        <option value='9'>2 mies.</option>
                </select>
                </th>
              </tr>
            </>
          ) : (
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

export default SummaryIndividualTable;
