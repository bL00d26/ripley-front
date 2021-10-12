import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
export const newUserPageStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
      paddingTop: theme.spacing(8),
    },
  })
);
