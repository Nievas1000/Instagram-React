import { useLazyQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import { GET_USER_BY_EMAIL } from "../graphql/queries";
import { useEffect } from "react";

const useAutoLogin = () => {
  const state = useSelector((state) => state);
  const email = localStorage.getItem("user");
  const dispatch = useDispatch();
  const [getUserByEmail] = useLazyQuery(GET_USER_BY_EMAIL, {
    fetchPolicy: "network-only",
    onCompleted(data) {
      dispatch({
        type: "LOGIN",
        payload: data.getUserByEmail,
      });
    },
  });
  useEffect(() => {
    const handle = async () => {
      try {
        getUserByEmail({ variables: { email } });
      } catch (error) {
        console.log(error.message);
      }
    };
    if (email && !state.isLogged) {
      handle();
    }
  }, []);
};

export default useAutoLogin;
