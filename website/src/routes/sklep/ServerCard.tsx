import React from 'react';
import { GoArrowDown } from "react-icons/go";
import clsx from "clsx";
import { GoCheck } from "react-icons/go";
import plans from './Plans.tsx';

type PlanType = keyof typeof plans;

interface PlanDetails {
    title: string;
    cpu: string;
    ram: string;
    storage: string;
    slots: string;
    duration: string;
    location: string;
  }

interface ServerCardProps {
    planDetails: PlanDetails;
    selectedServer: string | null;
    onServerSelect: (serverType: PlanType) => void;
    }

const ServerCard: React.FC<ServerCardProps> = ({
  planDetails,
  selectedServer,
  onServerSelect,
}) => {
    const isSelected = selectedServer === planDetails.title;
    const handleSelect = () => {
        onServerSelect(planDetails.title as PlanType);
      };
  return (
        <div className="h-full w-1/5 gap-4"> 
            <div tabIndex={0} className={clsx("collapse collapse-open border cursor-pointer", {"border-base-300": !isSelected, "border-accent": isSelected})}>
                <div className="collapse-content">
                    <div className="overflow-x-auto">
                        <table className="table text-center">
                            <tbody>
                                <tr>
                                    <th className="text-2xl">{planDetails.title}</th>
                                </tr>
                                <tr>
                                    <td>{planDetails.cpu}</td>
                                </tr>
                                <tr>
                                    <td>{planDetails.ram}</td>
                                </tr>
                                <tr>
                                    <td>{planDetails.storage}</td>
                                </tr>
                                <tr>
                                    <td>{planDetails.slots}</td>
                                </tr>
                                <tr>
                                    <td>{planDetails.duration}</td>
                                </tr>
                                <tr>
                                    <td>{planDetails.location}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                <div className="flex justify-center">
                    <button className="btn btn-ghost btn-lg" onClick={handleSelect}>  {isSelected ? <GoCheck /> : <GoArrowDown />} </button>
                </div>
            </div>
        </div> 
    </div>
  );
};

export default ServerCard;