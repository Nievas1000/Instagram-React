import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/mutations";
import { useForm } from "./useForm";

const useRegister = () => {
  const [user, handleChange, enable] = useForm({
    email: "",
    password: "",
    username: "",
  });
  const [createUser] = useMutation(CREATE_USER);

  const handleSubmit = () => {
    const { email, password, username } = user;
    createUser({ variables: { email, password, username } });
  };

  return [user, handleChange, enable, handleSubmit];
};

export default useRegister;
