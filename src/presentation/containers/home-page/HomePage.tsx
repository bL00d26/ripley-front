import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Routes } from "../../../application/utils/enums";

import Sidebar from "../../components/sidebar/Sidebar";
import { AverageAgePage } from "../average-age-page/AverageAgePage";
import { ListedUsersPage } from "../listed-users-page/ListedUsersPage";
import { NewUserPage } from "../new-user-page/NewUserPage";

export const HomePage = () => {
  return (
    <>
      <ToastContainer limit={1} />
      <div className="menu-container">
        <Sidebar />
        <div className="dashboard">
          <BrowserRouter>
            <Switch>
              <Route path={Routes.NEW_USER} exact component={NewUserPage} />
              <Route
                path={Routes.ALL_USERS}
                exact
                component={ListedUsersPage}
              />
              <Route
                path={Routes.AVERAGE_AGE_USERS}
                exact
                component={AverageAgePage}
              />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
};
