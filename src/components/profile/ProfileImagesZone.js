import { Col, Container, Row } from "react-bootstrap";

const ProfileImagesZone = ({ images, setOpen }) => {
  return (
    <Container className="container-imgs d-flex mt-1">
      <Row className="imgs-profile">
        {images.map((image) => {
          return (
            <Col key={image.id} onClick={() => setOpen(true)}>
              <img
                src={`http://localhost:3002/posts/${image.image}`}
                alt="Profile"
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ProfileImagesZone;
