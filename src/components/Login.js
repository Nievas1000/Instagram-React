import { Button, Col, Container, Row } from "react-bootstrap";
import instagram from "../assets/instagram.png";
import instagramLogin from "../assets/screenshot1.png";
import GoogleButton from "react-google-button";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../graphql/mutations";
import { useForm } from "../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [user, handleChange, enable] = useForm({
    email: "",
    password: "",
  });
  const [loginUser, { data }] = useMutation(LOGIN_USER);
  const dispatch = useDispatch();
  const userR = useSelector((state) => state);

  const handleSubmit = () => {
    const { email, password } = user;
    loginUser({ variables: { email, password } });
    dispatch({
      type: "LOGIN",
      payload: data.loginUser,
    });
  };
  console.log(data, userR);
  return (
    <Container>
      <Row className="main">
        <Col className="container-imgs">
          <div className="row d-flex img-login">
            <img src={instagramLogin} alt="instagram" />
          </div>
        </Col>
        <Col className="container-form">
          <div>
            <div className="row main-content">
              <div className="justify-content-center header">
                <img src={instagram} alt="instagram" />
              </div>
              <div className="l-part mt-5">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input-1"
                  value={user.email}
                  onChange={handleChange}
                />
                <div className="overlap-text">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="input-2"
                    value={user.password}
                    onChange={handleChange}
                  />
                </div>
                {enable ? (
                  <Button
                    variant="primary"
                    className="mt-3 mb-4"
                    onClick={handleSubmit}
                  >
                    Sign up
                  </Button>
                ) : (
                  <Button disabled variant="primary" className="mt-3 mb-4">
                    Sign up
                  </Button>
                )}
                <h5
                  style={{ color: "gray" }}
                  className="d-flex justify-content-center mt-4"
                >
                  OR
                </h5>
                <div className="d-flex justify-content-center mt-4">
                  <GoogleButton />
                </div>
              </div>
            </div>
            <div className="row main-content">
              <div className="d-flex justify-content-center">
                Don't have an account?<a href="/">Sign up</a>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
