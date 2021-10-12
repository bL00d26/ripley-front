import React from "react";
import Grid from "@material-ui/core/Grid";

import { listedUsersPageStyles } from "./listed-users-page.styles";
import UsersTable from "../../components/users-table/UsersTable";
export const ListedUsersPage = () => {
  const classes = listedUsersPageStyles();

  return (
    <div className={classes.root}>
      <Grid container direction="row" alignItems="center">
        <Grid item xs={12} sm={12}>
          <UsersTable />
        </Grid>
      </Grid>
    </div>
  );
};
