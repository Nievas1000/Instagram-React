import { Button, Col, Row } from "react-bootstrap";
import Menu from "./Menu";
import { useEffect, useRef, useState } from "react";
import CreatePostIcon from "../assets/CreatePostIcon";
import useDropdown from "../hooks/useDropdown";
import { HiArrowLeft } from "react-icons/hi";
import axios from "axios";

const Layout = ({ children }) => {
  const [isOpen, setOpen, divRefSon] = useDropdown(true);
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleImageUpload = async (file) => {
    console.log(file);
    setImage(URL.createObjectURL(file));
    const formData = new FormData();
    formData.append("image", file);
    formData.append("id", 8);

    try {
      const response = await axios.post(
        "http://localhost:3002/savePost",
        formData
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    handleImageUpload(file);
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    handleImageUpload(file);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isOpen]);
  return (
    <div className="container-profile">
      <Row className="grid-profile" style={{ width: "100%" }}>
        <Col sm={2} className="menu">
          <Menu setOpen={setOpen} />
        </Col>
        {children}
        {isOpen && (
          <div className="d-flex justify-content-center align-items-center container-create-post">
            <div className="modal-create-post" ref={divRefSon}>
              <div className="d-flex justify-content-center align-items-center header-create-post">
                {image && (
                  <div className="back-post">
                    <span onClick={() => setImage(null)}>
                      <HiArrowLeft />
                    </span>
                  </div>
                )}
                <h3>Create Post</h3>
                {image && (
                  <div className="continue-post">
                    <span variant="primary">Save</span>
                  </div>
                )}
              </div>
              {image ? (
                <img src={image} alt="prev" className="prev-img-create" />
              ) : (
                <div
                  className="d-flex justify-content-center align-items-center body-create-post"
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                >
                  <div className="d-block">
                    <div className="d-flex justify-content-center mb-3">
                      <CreatePostIcon />
                    </div>
                    <h5>Drag the photos and videos here</h5>
                    <div className="d-flex justify-content-center mt-4">
                      <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: "none" }}
                        onChange={handleFileInputChange}
                      />
                      <Button variant="primary" onClick={handleButtonClick}>
                        Select from computer
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </Row>
      <div className="menu-mobile">
        <Menu setOpen={setOpen} />
      </div>
    </div>
  );
};

export default Layout;
