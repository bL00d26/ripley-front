import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { User } from "../../../infraestructure/interfaces/user.interface";
import { userLastNamesStyles } from "./user-last-names.styles";

interface IUserLastNames {
  users: User[];
}

export const UserLastNames: React.FC<IUserLastNames> = ({ users }) => {
  const classes = userLastNamesStyles();
  return (
    <>
      <Card className={classes.card}>
        <CardHeader className={classes.title} title="APELLIDOS"></CardHeader>
        <CardContent>
          {users.map((user) => (
            <div className={classes.row} key={user.id}>
              <Typography variant="h5">{user.lastName}</Typography>
            </div>
          ))}
        </CardContent>
      </Card>
    </>
  );
};
