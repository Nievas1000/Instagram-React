import { useLazyQuery } from "@apollo/client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGIN_USER } from "../graphql/queries";
import { useForm } from "./useForm";

const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, handleChange, enable] = useForm({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loginUser] = useLazyQuery(LOGIN_USER, {
    fetchPolicy: "network-only",
    onCompleted(data) {
      if (data.loginUser.email === user.email) {
        dispatch({
          type: "LOGIN",
          payload: data.loginUser,
        });
        localStorage.setItem("user", data.loginUser.email);
        navigate("/profile", {
          replace: true,
        });
      }
    },
  });

  const handleSubmit = async () => {
    const { email, password } = user;
    try {
      loginUser({ variables: { email, password } });
    } catch (error) {
      setError(error.message);
    }
  };
  return [user, handleChange, enable, handleSubmit, error];
};

export default useLogin;
