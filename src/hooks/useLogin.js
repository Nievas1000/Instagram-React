import { useMutation } from "@apollo/client";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { LOGIN_USER } from "../graphql/mutations";
import { useForm } from "./useForm";

const useLogin = () => {
  const [user, handleChange, enable] = useForm({
    email: "",
    password: "",
  });
  const [loginUser] = useMutation(LOGIN_USER);
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    const { email, password } = user;
    try {
      const { data } = await loginUser({ variables: { email, password } });
      if (data.loginUser.email === user.email) {
        dispatch({
          type: "LOGIN",
          payload: data.loginUser,
        });
        <Navigate to="/profile" />;
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return [user, handleChange, enable, handleSubmit];
};

export default useLogin;
