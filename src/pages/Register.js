import { Button, Container } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { Link } from "react-router-dom";
import instagram from "../assets/instagram.png";
import useRegister from "../hooks/useRegister";

const Register = () => {
  const [user, handleChange, enable, handleSubmit, error] = useRegister();

  return (
    <Container className="d-flex justify-content-center mt-5">
      <div className="container-register">
        <div className="row form-register">
          <div className="justify-content-center header mt-5">
            <img src={instagram} alt="instagram" />
          </div>
          <h5
            className="d-flex justify-content-center"
            style={{ textAlign: "center", color: "gray" }}
          >
            Sign in to see photos and videos of your friends.
          </h5>
          <div className="d-flex justify-content-center mt-4">
            <GoogleButton />
          </div>
          <h5
            style={{ color: "gray" }}
            className="d-flex justify-content-center mt-4"
          >
            OR
          </h5>
          <div className="l-part mt-3">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input-1"
              value={user.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="input-1"
              value={user.username}
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
          </div>
          {error ? (
            <div className="d-flex justify-content-center mt-4 error-message">
              <h5>{error}</h5>
            </div>
          ) : null}
        </div>
        <div className="row mt-4 form-register">
          <div className="d-flex justify-content-center mt-4 mb-4">
            Do you have an account?<Link to="/login">Sign in</Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Register;
