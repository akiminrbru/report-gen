import React, { useState } from 'react';
import Chip from './Chip';
import styles from './ChipInput.module.scss';

const ChipInput = ({ chips, setChips }) => {
  // const [chips, setChips] = useState([]);
  const [inputValue, setInputValue] = useState('');


  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    const inputText = e.target.value;
    if (inputText.endsWith(',') || inputText.endsWith(';') || inputText.endsWith('.')) {
  
      const newChip = inputText.slice(0, -1).trim();
      if (newChip) {
        setChips([...chips, newChip]);
      }
      setInputValue('');
    }
  };

  const handleDeleteChip = (index) => {
    const updatedChips = [...chips];
    updatedChips.splice(index, 1);
    setChips(updatedChips);
  };

  return (
    <div className={styles.chip__wrap}>
        {chips.map((chip, index) => (
          <Chip key={index} label={chip} onDelete={() => handleDeleteChip(index)} />
        ))}
      <input
        className={styles.chip__input}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default ChipInput;