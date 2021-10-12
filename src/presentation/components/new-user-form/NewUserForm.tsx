import React, { SetStateAction, Dispatch, FormEvent, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import { createNewUser } from "../../../infraestructure/api/user.actions";
import { NewUserDto } from "../../../infraestructure/dtos/new-user.dto";
import { User } from "../../../infraestructure/interfaces/user.interface";
import { newUserFormStyles } from "./new-user-form.styles";

interface INewUserForm {
  setUser: Dispatch<SetStateAction<User | null>>;
}
export const NewUserForm: React.FC<INewUserForm> = ({ setUser }) => {
  const classes = newUserFormStyles();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");

  const handleCreateNewUser = async (e: FormEvent) => {
    e.preventDefault();
    const newUserDto: NewUserDto = {
      firstName,
      lastName,
      birthday,
    };
    const user = await createNewUser(newUserDto);
    if (!user) setUser(null);
    setUser(user);
  };
  return (
    <>
      <form className={classes.form} noValidate onSubmit={handleCreateNewUser}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="firstName"
          value={firstName}
          label="Nombres"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="lastName"
          value={lastName}
          label="Apellidos"
          onChange={(e) => setLastName(e.target.value)}
        />
        <TextField
          variant="outlined"
          type="date"
          margin="normal"
          InputLabelProps={{ shrink: true }}
          required
          fullWidth
          id="date"
          value={birthday}
          label="Fecha de Nacimiento"
          onChange={(e) => setBirthday(e.target.value)}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Crear Usuario
        </Button>
      </form>
    </>
  );
};
