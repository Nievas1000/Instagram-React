import { Container } from "react-bootstrap";
import image from "../assets/perfil.jpg";
import { HiDotsHorizontal } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineShareAlt } from "react-icons/ai";
import { CiSaveDown2 } from "react-icons/ci";

export const Post = ({ user }) => {
  return (
    <div className="container-post">
      <div className="header-post d-flex align-items-center">
        <Container className="d-flex">
          <div className="img-header-post">
            <img src={image} alt="img" />
          </div>
          <Container className="d-flex align-items-center">
            <h5>{user.username}</h5>
          </Container>
          <div className="d-flex align-items-center">
            <HiDotsHorizontal />
          </div>
        </Container>
      </div>
      <div className="container-img-post">
        <img src={image} alt="img" />
      </div>
      <div className="d-flex accions-post">
        <div className="d-flex">
          <AiOutlineHeart />
          <FaRegComment />
          <AiOutlineShareAlt />
        </div>
        <div className="save-post">
          <CiSaveDown2 />
        </div>
      </div>
      <div className="info-post">
        <h6>1000 Me gusta</h6>
        <h6>{user.username}</h6>
      </div>
    </div>
  );
};
