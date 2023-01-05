import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("user");
    dispatch({
      type: "LOGOUT",
      payload: {},
    });
    navigate("/", {
      replace: true,
    });
  };

  return [logout];
};

export default useLogout;
