import { Col, Row } from "react-bootstrap";
import Menu from "./Menu";
import { useEffect } from "react";
import useDropdown from "../hooks/useDropdown";
import { CreatePost } from "./createPost/CreatePost";

const Layout = ({ children }) => {
  const [isOpen, setOpen, divRefSon] = useDropdown();

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
      <Row style={{ width: "100%", marginLeft: "0px" }}>
        <Col sm={2} className="menu">
          <Menu setOpen={setOpen} />
        </Col>
        {children}
        {isOpen && (
          <div className="d-flex justify-content-center align-items-center container-create-post">
            <CreatePost divRefSon={divRefSon} setOpen={setOpen} />
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
