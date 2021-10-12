import React, { MouseEvent, useState } from "react";

import { useHistory } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import { Routes } from "../../../application/utils/routes";
import { centeredTabStyles } from "./centered-tabs.style";

const CenteredTabs = () => {
  const [selection, setSelection] = useState("");
  const classes = centeredTabStyles();
  const history = useHistory();
  const handleSelection = (e: MouseEvent, selection: string) => {
    e.preventDefault();
    setSelection(selection);
    history.push(selection);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        indicatorColor="primary"
        textColor="primary"
        centered
        value={selection}
      >
        <Tab
          label="Dashboard"
          value={Routes.DASHBOARD}
          onClick={(e) => handleSelection(e, Routes.DASHBOARD)}
        />
        <Tab
          label="Nuevo Cliente"
          value={Routes.NEW_USER}
          onClick={(e) => handleSelection(e, Routes.NEW_USER)}
        />
        <Tab
          label="Promedio de Edad"
          value={Routes.AVERAGE_AGE_USERS}
          onClick={(e) => handleSelection(e, Routes.AVERAGE_AGE_USERS)}
        />
        <Tab
          label="Lista de Clientes"
          value={Routes.ALL_USERS}
          onClick={(e) => handleSelection(e, Routes.ALL_USERS)}
        />
      </Tabs>
    </Paper>
  );
};

export default CenteredTabs;
