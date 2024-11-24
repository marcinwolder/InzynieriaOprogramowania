import React, { useState } from 'react';

interface SelectVersionProps {
    onVersionChange: (version: string) => void;
  }

const SelectVersion: React.FC<SelectVersionProps> = ({ onVersionChange }) => {
    const [selectedVersion, setSelectedVersion] = useState<string>(''); 
  
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const selected = event.target.value;
      setSelectedVersion(selected);
      onVersionChange(selected);
    };

    return (
    <label className="form-control w-full max-w-xs">
        <div className="label">
            <span className="label-text">Wybierz wersję:</span>
        </div>
        <select className="select select-bordered" onChange={handleChange}>
        <option disabled selected={selectedVersion === ''}>Pick one</option>
            <option>Optifine 1.21.3</option>
            <option>Optifine 1.21.1</option>
            <option>Optifine 1.21</option>
            <option>Optifine 1.20.4</option>
            <option>Optifine 1.20.2</option>
        </select>
    </label>
    );
};

export default SelectVersion;