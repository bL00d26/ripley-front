import { makeStyles } from "@material-ui/core/styles";

export const averageCardStyles = makeStyles((theme) => ({
  card: {
    marginTop: "1rem",
  },
  title: {
    textAlign: "center",
  },

  row: {
    border: "1px solid",
    borderRadius: "5px",
    padding: "0.5rem",
    marginBottom: "5px",
    textAlign: "center",
  },
}));
