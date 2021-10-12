import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { averageCardStyles } from "./average-card.styles";
import { getUsersAverageAge } from "../../../infraestructure/api/user.actions";

export const AverageCard = () => {
  const classes = averageCardStyles();
  const [averageAge, setAverageAge] = useState(0);
  const getAverageAge = async () => {
    const ageProm = await getUsersAverageAge();
    if (isNaN(ageProm)) setAverageAge(0);
    setAverageAge(ageProm);
  };
  useEffect(() => {
    getAverageAge();
  }, []);
  return (
    <>
      <Card className={classes.card}>
        <CardHeader
          className={classes.title}
          title="PROMEDIO DE EDAD"
        ></CardHeader>
        <CardContent>
          <div className={classes.row}>
            <Typography variant="h5">{averageAge}</Typography>
          </div>
        </CardContent>
      </Card>
    </>
  );
};
