import { Col } from "react-bootstrap";
import { Post } from "../components/Post";
import { Stories } from "../components/Stories";
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
  return (
    <Col sm={10} className="d-flex justify-content-end col-home">
      <div style={{ width: "100%" }}>
        <div className="d-flex justify-content-center">
          <Stories data={data} />
        </div>
        <div className="d-flex justify-content-center">
          <div className="d-block" style={{ width: "100%" }}>
            {data.map((user) => {
              return (
                <div className="d-flex justify-content-center">
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
