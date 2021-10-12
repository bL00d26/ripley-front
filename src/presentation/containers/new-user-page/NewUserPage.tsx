import React, { FormEvent, useState } from "react";
import { createNewUser } from "../../../infraestructure/api/user.actions";
import { NewUserDto } from "../../../infraestructure/dtos/new-user.dto";
import { User } from "../../../infraestructure/interfaces/user.interface";

export const NewUserPage = () => {
  const [newUser, setNewUser] = useState<User | null>(null);
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
    if (user) setNewUser(user);
  };

  return (
    <div>
      <form onSubmit={handleCreateNewUser}>
        <input
          type="text"
          placeholder="Nombre"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Apellido"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="date"
          placeholder="Edad"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
        />
        <button type="submit">Crear</button>
      </form>
    </div>
  );
};
