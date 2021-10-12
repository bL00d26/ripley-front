import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { User } from "../../../infraestructure/interfaces/user.interface";
import { userQuantityStyles } from "./user-quantity.styles";

interface IUserQuantity {
  users: User[];
}

export const UserQuantity: React.FC<IUserQuantity> = ({ users }) => {
  const classes = userQuantityStyles();
  return (
    <>
      <Card className={classes.card}>
        <CardHeader
          className={classes.title}
          title="CANTIDAD DE USUARIOS"
        ></CardHeader>
        <CardContent>
          <div className={classes.row}>
            <Typography variant="h5">{users.length}</Typography>
          </div>
        </CardContent>
      </Card>
    </>
  );
};
