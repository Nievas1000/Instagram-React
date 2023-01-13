import { AiOutlineSetting } from "react-icons/ai";
import { BsMoon } from "react-icons/bs";
import { CiSaveDown2 } from "react-icons/ci";

const MoreMenu = ({ show }) => {
  if (show) {
    return (
      <div className="container-moreMenu">
        <ul>
          <li>
            <div>Settings</div>
            <AiOutlineSetting />
          </li>
          <li>
            <div>Saved</div>
            <CiSaveDown2 />
          </li>
          <li>
            <div>Change appearance</div>
            <BsMoon />
          </li>
          <li>
            <div className="closse-session">Close session</div>
          </li>
        </ul>
      </div>
    );
  }
};

export default MoreMenu;
