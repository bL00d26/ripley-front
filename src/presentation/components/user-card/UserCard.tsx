import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import moment from "moment";

import { TimeFormat } from "../../../application/utils/enums";
import { User } from "../../../infraestructure/interfaces/user.interface";
import { userCardStyles } from "./user-card.styles";

interface IUserCard {
  user: User;
}

export const UserCard: React.FC<IUserCard> = ({ user }) => {
  const classes = userCardStyles();
  return (
    <>
      <Card>
        <CardHeader className={classes.title} title="USUARIO"></CardHeader>
        <CardContent>
          <div className={classes.row}>
            <Typography variant="h5">Nombres:</Typography>
            <Typography>{user.firstName}</Typography>
          </div>
          <div className={classes.row}>
            <Typography variant="h5">Apellidos:</Typography>
            <Typography>{user.lastName}</Typography>
          </div>
          <div className={classes.row}>
            <Typography variant="h5">Fecha de Nacimiento:</Typography>
            <Typography>
              {moment(user.birthday).format(TimeFormat.BIRTHDAY)}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </>
  );
};
