import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import moment from "moment";

import { User } from "../../../infraestructure/interfaces/user.interface";
import { userBirthdaysStyles } from "./user-birthdays.styles";
import { TimeFormat } from "../../../application/utils/enums";

interface IUserBirthdays {
  users: User[];
}

export const UserBirthdays: React.FC<IUserBirthdays> = ({ users }) => {
  const classes = userBirthdaysStyles();
  return (
    <>
      <Card className={classes.card}>
        <CardHeader className={classes.title} title="CUMPLEAÑOS"></CardHeader>
        <CardContent>
          {users.map((user) => (
            <div className={classes.row} key={user.id}>
              <Typography variant="h5">
                {moment(user.birthday).format(TimeFormat.BIRTHDAY)}
              </Typography>
            </div>
          ))}
        </CardContent>
      </Card>
    </>
  );
};
