import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineShareAlt } from "react-icons/ai";
import { CiSaveDown2 } from "react-icons/ci";
import { HeaderPost } from "./post/HeaderPost";
import { getRandomUsernames } from "../utils/getRandomUsernames";

export const Post = ({ user }) => {
  const username = getRandomUsernames();
  return (
    <div className="container-post mt-4">
      <div className="header-post d-flex align-items-center">
        <HeaderPost username={username} />
      </div>
      <div className="container-img-post">
        <img src={user.urls.regular} alt="img" />
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
        <h6>{username}</h6>
      </div>
    </div>
  );
};
