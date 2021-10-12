import { makeStyles, Theme } from "@material-ui/core/styles";
export const newUserFormStyles = makeStyles((theme: Theme) => ({
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
