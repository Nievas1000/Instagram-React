import { Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import AmountsProfile from "../components/profile/AmountsProfile";
import HeaderProfile from "../components/profile/HeaderProfile";
import IconsProfile from "../components/profile/IconsProfile";
import ProfileImagesZone from "../components/profile/ProfileImagesZone";
import { useEffect, useState } from "react";
import axios from "axios";
import useDropdown from "../hooks/useDropdown";
import { Post } from "../components/post/Post";

const Profile = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [isOpen, setOpen, divRefSon, divRefFather] = useDropdown();

  useEffect(() => {
    const getImages = async () => {
      try {
        const images = await axios.get(`http://localhost:3002/post/${user.id}`);
        setImages(images.data);
        dispatch({
          type: "ADD_PUBLIS",
          payload: images.data.length,
        });
      } catch (error) {
        console.log(error);
      }
    };
    getImages();
    if (isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [user.id]); // eslint-disable-line
  return (
    <Col className=" col-home" sm={10}>
      <div style={{ width: "100%" }}>
        <HeaderProfile user={user} images={images} />
        <Container className="mt-4 description mob">
          <span>{user.username}</span>
          <p>{user.description}</p>
        </Container>
        <div className="amount-profile mob">
          <AmountsProfile />
        </div>
        <IconsProfile />
        <ProfileImagesZone
          images={images}
          setOpen={setOpen}
          setSelectedImage={setSelectedImage}
        />
      </div>
      {isOpen && (
        <Post
          user={user}
          divRefSon={divRefSon}
          divRefFather={divRefFather}
          selectedImage={selectedImage}
        />
      )}
    </Col>
  );
};

export default Profile;
