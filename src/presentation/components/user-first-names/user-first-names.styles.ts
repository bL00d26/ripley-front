import { makeStyles } from "@material-ui/core/styles";

export const userFirstNamesStyles = makeStyles((theme) => ({
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
  card: {
    margin: "1rem 0.5rem",
    maxHeight: "350px",
    overflow: "auto",
  },
}));
