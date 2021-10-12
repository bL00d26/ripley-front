import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { User } from "../../../infraestructure/interfaces/user.interface";
import { userFirstNamesStyles } from "./user-first-names.styles";

interface IUserFirstNames {
  users: User[];
}

export const UserFirstNames: React.FC<IUserFirstNames> = ({ users }) => {
  const classes = userFirstNamesStyles();
  return (
    <>
      <Card className={classes.card}>
        <CardHeader className={classes.title} title="NOMBRES"></CardHeader>
        <CardContent>
          {users.map((user) => (
            <div className={classes.row} key={user.id}>
              <Typography variant="h5">{user.firstName}</Typography>
            </div>
          ))}
        </CardContent>
      </Card>
    </>
  );
};
