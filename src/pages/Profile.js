import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import AmountsProfile from "../components/AmountsProfile";
import HeaderProfile from "../components/HeaderProfile";
import IconsProfile from "../components/IconsProfile";
import Menu from "../components/Menu";
import ProfileImagesZone from "../components/ProfileImagesZone";

const Profile = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className="container-profile">
      <Row className="grid-profile">
        <Col sm={2} className="menu">
          <Menu />
        </Col>
        <Col sm={10}>
          <HeaderProfile user={user} />
          <Container className="mt-4 description mob">
            <span>{user.username}</span>
            <p>{user.description}</p>
          </Container>
          <div className="amount-profile mob">
            <AmountsProfile />
          </div>
          <IconsProfile />
          <ProfileImagesZone />
          <div className="menu-mobile">
            <Menu />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Profile;
