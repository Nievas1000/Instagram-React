import { Container } from "react-bootstrap";
import { HiDotsHorizontal } from "react-icons/hi";
import image from "../../assets/perfil.jpg";

export const HeaderPost = () => {
  return (
    <Container className="d-flex pt-3">
      <div className="img-header-post">
        <img src={image} alt="img" />
      </div>
      <Container className="d-flex align-items-center">
        <h5>lautaronievas1</h5>
      </Container>
      <div className="d-flex align-items-center">
        <HiDotsHorizontal />
      </div>
    </Container>
  );
};
