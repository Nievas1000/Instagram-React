import { useMutation } from "@apollo/client";
import { useState } from "react";
import { CREATE_USER } from "../graphql/mutations";
import { useForm } from "./useForm";

const useRegister = () => {
  const [user, handleChange, enable] = useForm({
    email: "",
    password: "",
    username: "",
  });
  const [error, setError] = useState("");
  const [createUser] = useMutation(CREATE_USER);

  const handleSubmit = async () => {
    const { email, password, username } = user;
    try {
      await createUser({
        variables: { email, password, username },
      });
    } catch (error) {
      setError(error.message);
    }
  };

  return [user, handleChange, enable, handleSubmit, error];
};

export default useRegister;
