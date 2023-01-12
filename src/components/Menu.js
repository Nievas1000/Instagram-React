import instagram from "../assets/instagram.png";
import {
  AiFillHome,
  AiOutlineHeart,
  AiOutlineUserDelete,
  AiOutlineInstagram,
} from "react-icons/ai";
import { BiSearch, BiMoviePlay, BiMessageRoundedDots } from "react-icons/bi";
import { MdOutlineExplore } from "react-icons/md";
import { BsPlusSquare } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import MoreMenu from "./MoreMenu";
import { useState } from "react";
const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="container-menu">
      <div className="justify-content-center header">
        <img src={instagram} alt="instagram" />
        <div className="icon-instagram">
          <AiOutlineInstagram />
        </div>
      </div>
      <ul className="container-list-menu">
        <li className="container-item-menu">
          <AiFillHome />
          <div className="item-menu">Home</div>
        </li>
        <li className="container-item-menu icon-mobile">
          <BiSearch />
          <div className="item-menu">Search</div>
        </li>
        <li className="container-item-menu">
          <MdOutlineExplore />
          <div className="item-menu">Explore</div>
        </li>
        <li className="container-item-menu">
          <BiMoviePlay />
          <div className="item-menu">Reels</div>
        </li>
        <li className="container-item-menu">
          <BiMessageRoundedDots />
          <div className="item-menu">Messages</div>
        </li>
        <li className="container-item-menu icon-mobile">
          <AiOutlineHeart />
          <div className="item-menu">Notifications</div>
        </li>
        <li className="container-item-menu">
          <BsPlusSquare />
          <div className="item-menu">Create</div>
        </li>
        <li className="container-item-menu">
          <AiOutlineUserDelete />
          <div className="item-menu">Profile</div>
        </li>
        <div className="more-menu">
          <MoreMenu show={showMenu} />
        </div>
        <li
          className="container-item-menu more"
          onClick={() => setShowMenu(!showMenu)}
        >
          <GiHamburgerMenu />
          <div className="item-menu">More</div>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
