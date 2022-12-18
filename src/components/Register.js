import { Button, Container } from "react-bootstrap";
import GoogleButton from "react-google-button";
import instagram from "../assets/instagram.png";

const Register = () => {
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
            <input type="email" placeholder="Email" className="input-1" />
            <input type="text" placeholder="Full Name" className="input-1" />
            <input type="text" placeholder="Username" className="input-1" />
            <div className="overlap-text">
              <input
                type="password"
                placeholder="Password"
                className="input-2"
              />
            </div>
            <Button disabled variant="primary" className="mt-3 mb-4">
              Sign up
            </Button>
          </div>
        </div>
        <div className="row mt-4 form-register">
          <div className="d-flex justify-content-center mt-4 mb-4">
            Do you have an account?<a href="/">Sign in</a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Register;
