import React from 'react';
import { GoChevronDown } from "react-icons/go";
import clsx from "clsx";
import { GoCheck } from "react-icons/go";

interface ServerCardProps {
  title: string;
  cpu: string;
  ram: string;
  storage: string;
  slots: string;
  duration: string;
  location: string;
  selectedServer: string | null;
  onServerSelect: (serverType: string) => void;
}

const ServerCard: React.FC<ServerCardProps> = ({
  title,
  cpu,
  ram,
  storage,
  slots,
  duration,
  location,
  selectedServer,
  onServerSelect,
}) => {
    const isSelected = selectedServer === title;
    const handleSelect = () => {
        onServerSelect(title);
      };
  return (
        <div className="h-full w-1/5 gap-4"> 
            <div tabIndex={0} className={clsx("collapse collapse-open border cursor-pointer", {"border-base-300": !isSelected, "border-blue-500": isSelected})}>
                <div className="collapse-content">
                    <div className="overflow-x-auto">
                        <table className="table text-center">
                            <tbody>
                                <tr>
                                    <th className="text-2xl">{title}</th>
                                </tr>
                                <tr>
                                    <td>{cpu}</td>
                                </tr>
                                <tr>
                                    <td>{ram}</td>
                                </tr>
                                <tr>
                                    <td>{storage}</td>
                                </tr>
                                <tr>
                                    <td>{slots}</td>
                                </tr>
                                <tr>
                                    <td>{duration}</td>
                                </tr>
                                <tr>
                                    <td>{location}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                <div className="flex justify-center">
                    <button className="btn btn-ghost btn-lg" onClick={handleSelect}>  {isSelected ? <GoCheck /> : <GoChevronDown />} </button>
                </div>
            </div>
        </div> 
    </div>
  );
};

export default ServerCard;