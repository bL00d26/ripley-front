import moment from "moment";
import { TimeFormat } from "../../../application/utils/enums";

interface Column {
  id: "id" | "firstName" | "lastName" | "birthday";
  label: string;
  minWidth?: number;
  align?: "center";
  format?: (value: any) => string;
}

export const columns: Column[] = [
  { id: "id", label: "ID", minWidth: 100 },
  { id: "firstName", label: "Nombres", minWidth: 100 },
  {
    id: "lastName",
    label: "Apellidos",
    minWidth: 100,
  },
  {
    id: "birthday",
    label: "Fecha de Nacimiento",
    minWidth: 100,
    format: (value: string) => moment(value).format(TimeFormat.BIRTHDAY),
  },
];
