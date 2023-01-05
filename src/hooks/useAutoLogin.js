import { useMutation } from "@apollo/client";
import { useDispatch } from "react-redux";
import { GET_USER_BY_EMAIL } from "../graphql/mutations";

const useAutoLogin = () => {
  const [getUserByEmail] = useMutation(GET_USER_BY_EMAIL);
  const email = localStorage.getItem("user");
  const dispatch = useDispatch();
  const handle = async () => {
    try {
      const { data } = await getUserByEmail({ variables: { email } });
      dispatch({
        type: "LOGIN",
        payload: data.getUserByEmail,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  if (email) {
    handle();
  }
};

export default useAutoLogin;
