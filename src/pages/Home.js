import { Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Post } from "../components/Post";
import { Stories } from "../components/Stories";

const Home = () => {
  const user = useSelector((state) => state.user);

  return (
    <Col sm={10} className="d-flex justify-content-center col-home">
      <div style={{ width: "100%" }}>
        <div className="d-flex justify-content-center">
          <Stories />
        </div>
        <div className="d-flex justify-content-center">
          <Post user={user} />
        </div>
      </div>
    </Col>
  );
};

export default Home;
