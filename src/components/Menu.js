import { Container } from "react-bootstrap";
import instagram from "../assets/instagram.png";
import {
  AiFillHome,
  AiOutlineHeart,
  AiOutlineUserDelete,
} from "react-icons/ai";
import { BiSearch, BiMoviePlay, BiMessageRoundedDots } from "react-icons/bi";
import { MdOutlineExplore } from "react-icons/md";
import { BsPlusSquare } from "react-icons/bs";
import { useSelector } from "react-redux";
const Menu = () => {
  const user = useSelector((state) => state.user);
  return (
    <Container className="container-menu">
      <div className="justify-content-center header">
        <img src={instagram} alt="instagram" />
      </div>
      <ul className="container-list-menu">
        <li>
          <AiFillHome />
          <div>Home</div>
        </li>
        <li>
          <BiSearch />
          <div>Search</div>
        </li>
        <li>
          <MdOutlineExplore />
          <div>Explore</div>
        </li>
        <li>
          <BiMoviePlay />
          <div>Reels</div>
        </li>
        <li>
          <BiMessageRoundedDots />
          <div>Messages</div>
        </li>
        <li>
          <AiOutlineHeart />
          <div>Notifications</div>
        </li>
        <li>
          <BsPlusSquare />
          <div>Create</div>
        </li>
        <li>
          <AiOutlineUserDelete />
          <div>Profile</div>
        </li>
      </ul>
    </Container>
  );
};

export default Menu;
