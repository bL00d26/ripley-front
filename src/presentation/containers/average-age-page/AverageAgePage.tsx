import Grid from "@material-ui/core/Grid";

import { AverageCard } from "../../components/average-card/AverageCard";
import { averageAgePageStyles } from "./average-age-page.styles";

export const AverageAgePage = () => {
  const classes = averageAgePageStyles();

  return (
    <div className={classes.root}>
      <Grid container direction="row" alignItems="center">
        <Grid item xs={12} sm={12}>
          <AverageCard />
        </Grid>
      </Grid>
    </div>
  );
};
