import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";

import { dashboardPageStyles } from "./dashboard-page.styles";
import { User } from "../../../infraestructure/interfaces/user.interface";
import { loadUsers } from "../../../infraestructure/api/user.actions";
import { UserQuantity } from "../../components/user-quantity/UserQuantity";
import { Loading } from "../../../infraestructure/common-components/loading/Loading";
import { UserFirstNames } from "../../components/user-first-names/UserFirstNames";
import { UserBirthdays } from "../../components/user-birthdays/UserBirthdays";
import { UserLastNames } from "../../components/user-last-names/UserLastNames";

export const DashboardPage = () => {
  const classes = dashboardPageStyles();
  const [users, setUsers] = useState([] as User[]);
  const getAllUsers = async () => {
    const users: User[] = await loadUsers();
    if (users.length < 0) setUsers([]);
    setUsers(users);
  };
  useEffect(() => {
    getAllUsers();
  }, []);
  return !(users.length > 0) ? (
    <Loading />
  ) : (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <UserQuantity users={users} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <UserFirstNames users={users} />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <UserBirthdays users={users} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <UserLastNames users={users} />
        </Grid>
      </Grid>
    </div>
  );
};
