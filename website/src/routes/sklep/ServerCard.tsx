import React from 'react';
import { SlArrowDown } from "react-icons/sl";


interface ServerCardProps {
  title: string;
  cpu: string;
  ram: string;
  storage: string;
  slots: string;
  duration: string;
  location: string;
  onClick: () => void;
}

const ServerCard: React.FC<ServerCardProps> = ({
  title,
  cpu,
  ram,
  storage,
  slots,
  duration,
  location,
  onClick,
}) => {
  return (
        <div className="h-full w-1/5 gap-4"> 
            <div tabIndex={0} className="collapse collapse-open border border-base-300 cursor-pointer">
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
                    <button className="btn btn-ghost" onClick={onClick}><SlArrowDown /></button>
                </div>
            </div>
        </div> 
    </div>
  );
};

export default ServerCard;