import React, { useEffect, useState } from "react";
import { getUsersAverageAge } from "../../../infraestructure/api/user.actions";

export const AverageAgePage = () => {
  const [averageAge, setAverageAge] = useState(0);
  const getAverageAge = async () => {
    const ageProm = await getUsersAverageAge();
    if (isNaN(ageProm)) setAverageAge(0);
    setAverageAge(ageProm);
  };
  useEffect(() => {
    getAverageAge();
  }, []);
  return (
    <div>
      <span>{averageAge}</span>
    </div>
  );
};
