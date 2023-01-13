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
  const [showNames, setShowNames] = useState(true);
  return (
    <div className="container-menu">
      <div className="justify-content-center header">
        <img src={instagram} alt="instagram" />
        <div className="icon-instagram">
          {showNames ? <AiOutlineInstagram /> : null}
        </div>
      </div>
      <ul className="container-list-menu">
        <li className="container-item-menu">
          <AiFillHome />
          {showNames ? <div className="item-menu">Home</div> : null}
        </li>
        <li
          className="container-item-menu icon-mobile"
          onClick={() => setShowNames(!showNames)}
        >
          <BiSearch />
          {showNames ? <div className="item-menu">Search</div> : null}
        </li>
        <li className="container-item-menu">
          <MdOutlineExplore />
          {showNames ? <div className="item-menu">Explore</div> : null}
        </li>
        <li className="container-item-menu">
          <BiMoviePlay />
          {showNames ? <div className="item-menu">Reels</div> : null}
        </li>
        <li className="container-item-menu">
          <BiMessageRoundedDots />
          {showNames ? <div className="item-menu">Messages</div> : null}
        </li>
        <li
          className="container-item-menu icon-mobile"
          onClick={() => setShowNames(!showNames)}
        >
          <AiOutlineHeart />
          {showNames ? <div className="item-menu">Notifications</div> : null}
        </li>
        <li className="container-item-menu">
          <BsPlusSquare />
          {showNames ? <div className="item-menu">Create</div> : null}
        </li>
        <li className="container-item-menu">
          <AiOutlineUserDelete />
          {showNames ? <div className="item-menu">Profile</div> : null}
        </li>
        <div className="more-menu">
          <MoreMenu show={showMenu} />
        </div>
        <li
          className="container-item-menu more"
          onClick={() => setShowMenu(!showMenu)}
        >
          <GiHamburgerMenu />
          {showNames ? <div className="item-menu">More</div> : null}
        </li>
      </ul>
    </div>
  );
};

export default Menu;
