import { Button, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import image2 from "../../assets/perfil.jpg";

export const CreatePostDescription = ({
  description,
  setDescription,
  sendPost,
}) => {
  const user = useSelector((state) => state.user);
  return (
    <div className="container-create-description">
      <div className="logo-create-description d-flex align-items-center">
        <Container className="d-flex">
          <div className="img-header-post">
            <img src={image2} alt="img" />
          </div>
          <Container className="d-flex align-items-center">
            <h5>{user.username}</h5>
          </Container>
        </Container>
      </div>
      <div className="container container-input-post">
        <textarea
          placeholder="Write a description..."
          className="create-post-input"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <Button variant="secondary" onClick={sendPost}>
        Share
      </Button>
    </div>
  );
};
