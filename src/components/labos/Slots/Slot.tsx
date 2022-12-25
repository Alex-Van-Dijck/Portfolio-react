import React from 'react';
import Cherry from '../../../Assets/Slots/cherry.png';
import Lemon from '../../../Assets/Slots/lemon.png';
import Melon from '../../../Assets/Slots/watermelon.png';
import Prune from '../../../Assets/Slots/prune.png';
import Seven from '../../../Assets/Slots/seven.png';
import styles from './slots.module.css';
import {useTheme} from '@mui/material';

const Slot = ({ value }: { value: number }) => {
    const theme = useTheme();
    let img = Cherry;
    switch (value) {
      case 0: img = Cherry; break;
      case 1: img = Lemon; break;
      case 2: img = Melon; break;
      case 3: img = Prune; break;
      case 4: img = Seven; break;
    }
    return (
      <div className={styles.slot} style={{borderColor:theme.palette.divider}}>
        <img src={img} style={{maxWidth:'80px',maxHeight:'80px'}}/>
      </div>
    );
  };

  export default Slot;