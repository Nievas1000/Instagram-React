import { IoChevronBack } from "react-icons/io5";
import { useSelector } from "react-redux";
import { ChangeImage } from "../components/settings/ChangeImage";
import { useNavigate } from "react-router-dom";
import { ChangeInfo } from "../components/settings/ChangeInfo";

export const Settings = () => {
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);

  return (
    <div>
      <div className="header-settings mt-2">
        <div className="back-settings pointer">
          <IoChevronBack onClick={() => navigate(-1)} />
        </div>
        <div
          className="d-flex justify-content-center"
          style={{ width: "100%" }}
        >
          <h4>Edit Profile</h4>
        </div>
      </div>
      <h1 className="ms-3 mt-4">Configuration</h1>
      <div className="container-settings">
        <h2 className="ms-5 mt-3">Edit Profile</h2>
        <div className="mt-5 ms-3">
          <ChangeImage user={user} />
          <ChangeInfo user={user} />
        </div>
      </div>
    </div>
  );
};
