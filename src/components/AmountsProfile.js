import { Container } from "react-bootstrap";

const AmountsProfile = () => {
  return (
    <Container className="container-amount-profile">
      <ul className="d-flex amount-profile">
        <li>
          <span>7</span>
          <p>publicaciones</p>
        </li>
        <li>
          <span>490</span>
          <p>seguidores</p>
        </li>
        <li>
          <span>446</span>
          <p>seguidos</p>
        </li>
      </ul>
    </Container>
  );
};

export default AmountsProfile;
