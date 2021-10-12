import { Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { ToastContainer } from "react-toastify";

import { Routes } from "../../../application/utils/routes";

import Navbar from "../../components/navbar/Navbar";
import CenteredTabs from "../../components/centered-tabs/CenteredTabs";

import { AverageAgePage } from "../average-age-page/AverageAgePage";
import { ListedUsersPage } from "../listed-users-page/ListedUsersPage";
import { NewUserPage } from "../new-user-page/NewUserPage";
import { DashboardPage } from "../dashboard-page/DashboardPage";

export const HomePage = () => {
  return (
    <>
      <ToastContainer limit={1} />
      <Navbar />
      <CssBaseline />
      <div>
        <CenteredTabs />
        <Container fixed>
          <Switch>
            <Route path={Routes.DASHBOARD} exact component={DashboardPage} />
            <Route path={Routes.NEW_USER} exact component={NewUserPage} />
            <Route path={Routes.ALL_USERS} exact component={ListedUsersPage} />
            <Route
              path={Routes.AVERAGE_AGE_USERS}
              exact
              component={AverageAgePage}
            />
          </Switch>
        </Container>
      </div>
    </>
  );
};
