import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

const AmountsProfile = () => {
  const user = useSelector((state) => state.user);
  return (
    <Container className="container-amount-profile">
      <ul className="d-flex amount-profile">
        <li>
          <span>{user.publications}</span>
          <p>publicaciones</p>
        </li>
        <li>
          <span>{user.followers}</span>
          <p>seguidores</p>
        </li>
        <li>
          <span>{user.followed}</span>
          <p>seguidos</p>
        </li>
      </ul>
    </Container>
  );
};

export default AmountsProfile;
