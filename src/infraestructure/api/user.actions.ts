import axios from "axios";
import { toast } from "react-toastify";

import { NewUserDto } from "../dtos/new-user.dto";
import { ApiUrls } from "./api.urls";

export const createNewUser = async (newUserDto: NewUserDto) => {
  const res: any = await axios.post(
    ApiUrls.usersUrl.concat("create"),
    newUserDto
  );
  if (!res.data.success) {
    toast.error("Error al crear usuario");
    return null;
  }
  toast.success("Usuario creado con éxito");
  return res.data.user;
};

export const loadUsers = async () => {
  const res: any = await axios.get(ApiUrls.usersUrl.concat("all"));
  if (!res.data.success) return [];

  return res.data.users;
};

export const getUsersAverageAge = async () => {
  const res: any = await axios.get(ApiUrls.usersUrl.concat("average-age"));
  if (!res.data.success) return null;
  return res.data.ageProm;
};
