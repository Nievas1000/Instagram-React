import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";

export const IconsZone = () => {
  return (
    <div>
      <div className="d-flex accions-post">
        <div className="d-flex">
          <AiOutlineHeart />
          <FaRegComment />
          <AiOutlineShareAlt />
        </div>
      </div>
      <div className="info-post">
        <h6>1000 Me gusta</h6>
        <h6>lautaronievas1</h6>
      </div>
    </div>
  );
};
