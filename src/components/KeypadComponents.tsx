import React from "react";
import {
  Button,
  Grid,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import myTheme from "../themes/myTheme";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    myInputText: {
      width: "6vw",
      height: "2.4vw",
      fontSize: "2vw",
      margin: "0.5vw",
      textAlign: "right",
      [theme.breakpoints.down("sm")]: {
        width: "12vw",
        height: "4.8vw",
        fontSize: "4vw",
      },
    },
    centerRow: {
      display: "flex",
      justifyContent: "center",
    },
    keypadKey: {
      width: "4vw",
      height: "4vw",
      fontSize: "2vw",
      minWidth: "1vw",
      [theme.breakpoints.down("sm")]: {
        width: "8vw",
        height: "8vw",
        fontSize: "4vw",
      },
    },
  }));

interface IKeypadComponentsOwnProps {
  handleClick: (arg0: string) => void;
}

export const MyKeypad: React.FC<IKeypadComponentsOwnProps> = ({ handleClick }): JSX.Element => {
  const keypadTexts = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const keypadColors = [myTheme.color.red, myTheme.color.orange, myTheme.color.yellow, myTheme.color.lime, myTheme.color.green, myTheme.color.cyan, myTheme.color.blue, myTheme.color.purple];
  var randomIndex = Math.floor(Math.random() * keypadColors.length);

  const classes = useStyles();

  return (
    <>
      <Grid className={classes.centerRow}>
        {
          keypadTexts.map((key, index) => {
            if (index < 5) {
              return <Button
                key={index}
                className={classes.keypadKey}
                value={key}
                variant="contained"
                style={{
                  color: myTheme.color.myBlack,
                  backgroundColor: keypadColors[(index + randomIndex) % keypadColors.length]
                }}
                onClick={() => { handleClick(key) }}
              >{key}</Button>
            }
          })
        }
      </Grid>
      <Grid className={classes.centerRow}>
        {
          keypadTexts.map((key, index) => {
            if (index > 4) {
              return <Button
                key={index}
                className={classes.keypadKey}
                value={key}
                variant="contained"
                style={{
                  color: myTheme.color.myBlack,
                  backgroundColor: keypadColors[(index + randomIndex + 5) % keypadColors.length]
                }}
                onClick={() => { handleClick(key) }}
              >{key}</Button>
            }
          })
        }
      </Grid>
    </>
  )
}

