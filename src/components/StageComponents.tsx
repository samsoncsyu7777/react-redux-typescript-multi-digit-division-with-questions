import React from "react";
import { ButtonGroup, Button, Grid, Typography } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const stageButtonsStyles = makeStyles(() =>
  createStyles({
    centerRow: {
      display: "flex",
      justifyContent: "center",
    },
    verticalCenterRow: {
      display: "flex",
      alignItems: "center",
    },
  })
);

interface IStageButtonsOwnProps {
  stageText: string;
  stages: Array<string>;
  handleStageClick: (stage: number) => void;
}

export const StageButtons: React.FC<IStageButtonsOwnProps> = ({
  stageText,
  stages,
  handleStageClick,
}): JSX.Element => {
  const classes = stageButtonsStyles();

  return (
    <Grid>
      <Grid className={`${classes.centerRow} ${classes.verticalCenterRow}`}>
        <Typography>{stageText}</Typography>
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          {stages.map((stage, index) => {
            return (
              <Button
                key={parseInt(stage)}
                onClick={() => handleStageClick(parseInt(stage))}
              >
                {parseInt(stage) + 1}
              </Button>
            );
          })}
          <Button onClick={() => handleStageClick(-1)}>Manual</Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
};
