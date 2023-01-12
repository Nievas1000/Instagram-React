import { AiOutlineSetting } from "react-icons/ai";
import { BsMoon } from "react-icons/bs";
import { CiSaveDown2 } from "react-icons/ci";

const MoreMenu = ({ show }) => {
  if (show) {
    return (
      <div className="container-moreMenu">
        <ul>
          <li>
            Settings <AiOutlineSetting />
          </li>
          <li>
            Saved <CiSaveDown2 />
          </li>
          <li>
            Change appearance <BsMoon />
          </li>
          <li>Close session</li>
        </ul>
      </div>
    );
  }
};

export default MoreMenu;
