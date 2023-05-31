import { useRef } from "react";
import image from "../../assets/perfil.jpg";
import useDropdown from "../../hooks/useDropdown";
import axios from "axios";

export const ChangeImage = ({ user }) => {
  const [isOpen, setOpen, divRefSon] = useDropdown();
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    formData.append("id", user.id);
    try {
      await axios.put("http://localhost:3002/profileImage", formData);
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteProfileImage = async () => {
    try {
      await axios.put(`http://localhost:3002/deleteProfileImage/${user.id}`);
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="d-flex container-img-settings">
      <img
        src={
          user.image === ""
            ? image
            : `http://localhost:3002/posts/${user.image}`
        }
        alt="change"
        className="img-settings"
      />
      <div className="info-change-photo ms-4">
        <h6>{user.username}</h6>
        <span className="pointer" onClick={() => setOpen(true)}>
          Change profile photo
        </span>
      </div>
      {isOpen && (
        <div className="container-update-image d-flex justify-content-center align-items-center">
          <div
            className="modal-update-image d-flex justify-content-center"
            ref={divRefSon}
          >
            <div style={{ width: "100%" }}>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileInputChange}
              />
              <h3>Change profile image</h3>
              <h4
                className="upload-image-profile pointer"
                onClick={handleButtonClick}
              >
                Upload photo
              </h4>
              <h4
                className="delete-image-profile pointer"
                onClick={deleteProfileImage}
              >
                Delete current photo
              </h4>
              <h4 className="pointer" onClick={() => setOpen(false)}>
                Cancel
              </h4>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
