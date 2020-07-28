import React, { FC } from 'react';
import './Toggle.css';

export type ToggleType = {
  isOn: boolean;
  handleChange: () => void;
};

export const Toggle: FC<ToggleType> = ({ isOn, handleChange }) => {
  return (
    <label data-testid="Toggle-label" className="switch">
      <input
        checked={isOn}
        data-testid="Toggle"
        onChange={handleChange}
        type="checkbox"
      />
      <span className="slider round"></span>
    </label>
  );
};
