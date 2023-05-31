import { Col } from "react-bootstrap";
import { Post } from "../components/Post";
import { Stories } from "../components/Stories";
import { useEffect, useState } from "react";
import image from "../assets/perfil.jpg";

const data = [
  { userName: "lautaronievas1", image },
  { userName: "jorgebunanote", image },
  { userName: "hernanperez", image },
  { userName: "matiasperez", image },
  { userName: "federicogomez", image },
  { userName: "federicogomez", image },
  { userName: "federicogomez", image },
  { userName: "federicogomez", image },
  { userName: "federicogomez", image },
  { userName: "federicogomez", image },
  { userName: "federicogomez", image },
];

const Home = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const getPhotos = async () => {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?per_page=20&query=people`,
        {
          headers: {
            Authorization:
              "Client-ID yKTFbh5OL9m2wz1tMtPDwHOlE2dBMITcnqtFmW1nhLo",
          },
        }
      );
      const data = await response.json();
      setImages(data.results);
    };
    getPhotos();
  }, []);
  return (
    <Col sm={10} className="d-flex justify-content-end col-home">
      <div style={{ width: "100%" }}>
        <div className="d-flex justify-content-center">
          <Stories data={data} />
        </div>
        <div className="d-flex justify-content-center">
          <div className="d-block" style={{ width: "100%" }}>
            {images.map((user) => {
              return (
                <div className="d-flex justify-content-center" key={user.id}>
                  <Post user={user} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Col>
  );
};

export default Home;
