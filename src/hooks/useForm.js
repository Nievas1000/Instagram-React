import { useState } from "react";

export const useForm = (state) => {
  const [user, setUser] = useState(state);
  const [enable, setEnable] = useState(false);
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    if (user.email !== "" && user.username !== "" && user.password !== "") {
      setEnable(true);
    }
  };

  return [user, handleChange, enable];
};
