import { useMutation } from "@apollo/client";
import { useState } from "react";
import { CREATE_USER } from "../graphql/mutations";
import { useForm } from "./useForm";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const useRegister = () => {
  const [user, handleChange, enable] = useForm({
    email: "",
    password: "",
    username: "",
  });
  const [error, setError] = useState("");
  const [createUser] = useMutation(CREATE_USER, {
    fetchPolicy: "network-only",
    onCompleted(data) {
      dispatch({
        type: "LOGIN",
        payload: user.email,
      });
      localStorage.setItem("user", user.email);
      navigate("/profile", {
        replace: true,
      });
    },
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
