import { Container } from "react-bootstrap";
import { CiSaveDown2 } from "react-icons/ci";
import { HiSquares2X2 } from "react-icons/hi2";

const IconsProfile = () => {
  return (
    <div className="icons-container mt-4 mb-4">
      <Container className="d-flex justify-content-center">
        <span className="mt-3">
          <HiSquares2X2 /> publications
        </span>
        <span className="icon-saved mt-3">
          <CiSaveDown2 /> saved
        </span>
      </Container>
    </div>
  );
};

export default IconsProfile;
