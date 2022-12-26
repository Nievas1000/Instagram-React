import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGIN_USER } from "../graphql/mutations";
import { useForm } from "./useForm";

const useLogin = () => {
  const [user, handleChange, enable] = useForm({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loginUser] = useMutation(LOGIN_USER);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const { email, password } = user;
    try {
      const { data } = await loginUser({ variables: { email, password } });
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
    } catch (error) {
      setError(error.message);
    }
  };
  return [user, handleChange, enable, handleSubmit, error];
};

export default useLogin;
