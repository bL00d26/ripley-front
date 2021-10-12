import { useState } from "react";
import Grid from "@material-ui/core/Grid";

import { newUserPageStyles } from "./new-user-page.styles";
import { NewUserForm } from "../../components/new-user-form/NewUserForm";
import { UserCard } from "../../components/user-card/UserCard";
import { User } from "../../../infraestructure/interfaces/user.interface";

export const NewUserPage = () => {
  const classes = newUserPageStyles();
  const [user, setUser] = useState<User | null>(null);
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <NewUserForm setUser={setUser} />
        </Grid>
        <Grid item xs={12} sm={6}>
          {user && <UserCard user={user} />}
        </Grid>
      </Grid>
    </div>
  );
};
