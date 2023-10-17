import React from 'react'
import styles from './ChipInput.module.scss';
import deleteChipIcon from '../../../assets/delChip.svg';

const Chip = ({ label, onDelete }) => {
  return (
    <div className={styles.chip}>
        {label}
        <img src={deleteChipIcon} onClick={onDelete} alt='#'></img>
    </div>
  )
}

export default Chip