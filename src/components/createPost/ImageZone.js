import { Button } from "react-bootstrap";
import CreatePostIcon from "../../assets/CreatePostIcon";

export const ImageZone = ({ ...props }) => {
  return (
    <div
      className="d-flex justify-content-center align-items-center body-create-post"
      onDragOver={props.handleDragOver}
      onDrop={props.handleDrop}
    >
      <div className="d-block">
        <div className="d-flex justify-content-center mb-3">
          <CreatePostIcon />
        </div>
        <h5>Drag the photos and videos here</h5>
        <div className="d-flex justify-content-center mt-4">
          <input
            type="file"
            ref={props.fileInputRef}
            style={{ display: "none" }}
            onChange={props.handleFileInputChange}
          />
          <Button variant="primary" onClick={props.handleButtonClick}>
            Select from computer
          </Button>
        </div>
      </div>
    </div>
  );
};
