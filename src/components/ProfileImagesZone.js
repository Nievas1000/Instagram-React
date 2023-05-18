import { Col, Container, Row } from "react-bootstrap";
import image from "../assets/perfil.jpg";

const ProfileImagesZone = () => {
  return (
    <Container className="container-imgs d-flex mt-1">
      <Row className="imgs-profile">
        <Col>
          <img src={image} alt="Profile" />
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileImagesZone;
