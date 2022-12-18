import { Button, Col, Container, Row } from "react-bootstrap";
import instagram from "../assets/instagram.png";
import instagramLogin from "../assets/screenshot1.png";
import GoogleButton from "react-google-button";

const Login = () => {
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
                <input type="text" placeholder="Username" className="input-1" />
                <div className="overlap-text">
                  <input
                    type="password"
                    placeholder="Password"
                    className="input-2"
                  />
                </div>
                <Button disabled variant="primary" className="mt-3">
                  Login
                </Button>
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
