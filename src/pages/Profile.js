import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import AmountsProfile from "../components/AmountsProfile";
import HeaderProfile from "../components/HeaderProfile";
import IconsProfile from "../components/IconsProfile";
import ProfileImagesZone from "../components/ProfileImagesZone";

const Profile = () => {
  const user = useSelector((state) => state.user);
  return (
    <div>
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
    </div>
  );
};

export default Profile;
