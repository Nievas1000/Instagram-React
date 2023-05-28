import axios from "axios";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useCreatePost = (setOpen) => {
  const [post, setPost] = useState(null);
  const [prevImage, setPrevImage] = useState(null);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [description, setDescription] = useState("");
  const [showDescription, setShowDescription] = useState();
  const fileInputRef = useRef(null);

  const sendPost = async () => {
    post.append("description", description);
    try {
      const response = await axios.post("http://localhost:3002/post", post);
      if (response.data === "Created!") {
        setDescription("");
        dispatch({
          type: "ADD_PUBLIS",
          payload: response.data.length,
        });
        setOpen(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleImageUpload = async (file) => {
    setPrevImage(URL.createObjectURL(file));
    const formData = new FormData();
    formData.append("image", file);
    formData.append("id", user.id);
    formData.append("date", new Date().toDateString());
    setPost(formData);
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

  return [
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
  ];
};
