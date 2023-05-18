import { Col, Row } from "react-bootstrap";
import Menu from "./Menu";

const Layout = ({ children }) => {
  return (
    <div className="container-profile">
      <Row className="grid-profile">
        <Col sm={2} className="menu">
          <Menu />
        </Col>
        {children}
      </Row>
      <div className="menu-mobile">
        <Menu />
      </div>
    </div>
  );
};

export default Layout;
