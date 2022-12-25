import React,{useState} from "react";
import styles from './slots.module.css';
import Slot from "./Slot";
import { Button,Typography,useTheme,Alert, } from "@mui/material";

const SlotMachine = ({ slots }: { slots: number }) => {

    const theme = useTheme();

    const getSlots = (slots: number) => {
        let slotNumbers: number[] = Array.from(Array(slots).keys()).map(() =>
        Math.floor(Math.random() * 5)
        );
        return slotNumbers;
    }
  

    const [slotNumbers, setSlotNumbers] = useState(getSlots(slots));
    const [money, setMoney] = useState(100);
  
    const isWinning = () => {
      let winning = slotNumbers.every((slot) => slot === slotNumbers[0]);
      return winning;
    }
  
    const pullLever : React.MouseEventHandler<HTMLButtonElement> = () => {
      setSlotNumbers(getSlots(slots));
      if (isWinning()) {
        setMoney(money + 20);
      } else {
        setMoney(money => money - 1);
      }
    }
  
  
    return (
      <div className={styles.slotMachineContainer}>
        {money > 0 && <div style={{color:theme.palette.text.primary}}>Saldo: €{money}</div>}
        <div className={styles.slotMachineSubContainer} style={{borderColor:theme.palette.divider}}>
          <Button style={{margin:'2rem'}} variant='outlined' onClick={pullLever} disabled={money > 0 ? false : true}>Pull Lever</Button>
          {slotNumbers.map((slot, i) => (
            <Slot value={slot} key={i} />
          ))}
        </div>
        {money === 0 && <Alert severity="error">Je bent bankroet!</Alert>}
   
      </div>
    );
  };

  export default SlotMachine;