import { Button, Col, Container, Row } from "react-bootstrap";
import image from "../assets/perfil.jpg";
import AmountsProfile from "../components/AmountsProfile";
import { CiSaveDown2 } from "react-icons/ci";
import { HiSquares2X2 } from "react-icons/hi2";

const Profile = () => {
  return (
    <div>
      <Container>
        <Row className="mt-4">
          <Col>
            <img src={image} alt="Profile" className="img-profile" />
          </Col>
          <Col className="container-data-profile">
            <h2>lautaronievas1</h2>
            <Button variant="secondary" className="button-edit mt-2">
              Edit profile
            </Button>
            <div className="amount-profile-desk">
              <AmountsProfile />
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="mt-4 description">
        <span>lautaronievas1</span>
        <p>Bolivar-Tandil</p>
      </Container>
      <div className="amount-profile-mob">
        <AmountsProfile />
      </div>
      <div className="icons-container mt-4 mb-4">
        <Container className="d-flex justify-content-center">
          <span>
            <HiSquares2X2 /> publications
          </span>
          <span className="icon-saved">
            <CiSaveDown2 /> saved
          </span>
        </Container>
      </div>
      <Container className="mt-1">
        <Row className="imgs-profile">
          <Col>
            <img src={image} alt="Profile" />
          </Col>
          <Col>
            <img src={image} alt="Profile" />
          </Col>
          <Col>
            <img src={image} alt="Profile" />
          </Col>
          <Col>
            <img src={image} alt="Profile" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;
