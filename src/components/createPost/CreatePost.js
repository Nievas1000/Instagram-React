import { HiArrowLeft } from "react-icons/hi";
import { CreatePostDescription } from "./CreatePostDescription";
import { useCreatePost } from "../../hooks/useCreatePost";
import { ImageZone } from "./ImageZone";

export const CreatePost = ({ divRefSon, setOpen }) => {
  const [
    description,
    setDescription,
    sendPost,
    handleFileInputChange,
    handleDrop,
    handleDragOver,
    handleButtonClick,
    prevImage,
    showDescription,
    setShowDescription,
    setPrevImage,
    fileInputRef,
  ] = useCreatePost(setOpen);

  return (
    <div className="container-modal-steps" ref={divRefSon}>
      <div className="modal-create-post">
        <div className="d-flex justify-content-center align-items-center header-create-post">
          {prevImage && (
            <div className="back-post">
              <span onClick={() => setPrevImage(null)}>
                <HiArrowLeft />
              </span>
            </div>
          )}
          <h3>Create Post</h3>
          {prevImage && (
            <div className="continue-post">
              {!showDescription ? (
                <span
                  variant="primary"
                  onClick={() => setShowDescription(true)}
                >
                  Continue
                </span>
              ) : (
                <span
                  variant="primary"
                  onClick={() => setShowDescription(false)}
                >
                  Cancel
                </span>
              )}
            </div>
          )}
        </div>
        {prevImage ? (
          <img src={prevImage} alt="prev" className="prev-img-create" />
        ) : (
          <ImageZone
            handleDragOver={handleDragOver}
            handleDrop={handleDrop}
            fileInputRef={fileInputRef}
            handleFileInputChange={handleFileInputChange}
            handleButtonClick={handleButtonClick}
          />
        )}
      </div>
      {showDescription && prevImage && (
        <CreatePostDescription
          description={description}
          setDescription={setDescription}
          sendPost={sendPost}
        />
      )}
    </div>
  );
};
