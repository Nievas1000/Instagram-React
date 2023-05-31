import { Container } from "react-bootstrap";
import { HiDotsHorizontal } from "react-icons/hi";

export const HeaderPost = ({ username }) => {
  return (
    <Container className="d-flex pt-3">
      <div className="img-header-post">
        <img src={`http://i.pravatar.cc/150?u=${username}`} alt="img" />
      </div>
      <Container className="d-flex align-items-center">
        <h5>{username}</h5>
      </Container>
      <div className="d-flex align-items-center">
        <HiDotsHorizontal />
      </div>
    </Container>
  );
};
