import { IconsZone } from "./IconsZone";
import { HeaderPost } from "./HeaderPost";
import { useLazyQuery } from "@apollo/client";
import { GET_COMENTS_BY_POST } from "../../graphql/queries";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { getRandomUsernames } from "../../utils/getRandomUsernames";

export const Post = ({ user, divRefSon, divRefFather, selectedImage }) => {
  const [coments, setComents] = useState([]);
  const [getComents] = useLazyQuery(GET_COMENTS_BY_POST, {
    fetchPolicy: "network-only",
    onCompleted(data) {
      setComents(data.getComentsByPost);
    },
  });

  useEffect(() => {
    try {
      getComents({ variables: { id: selectedImage.id } });
    } catch (error) {
      console.log(error);
    }
  }, []); //eslint-disable-line
  return (
    <div className="container-own-post d-flex justify-content-center align-items-center">
      <div className="modal-own-post" ref={divRefSon}>
        <div className="header-own-post mobile-header">
          <HeaderPost />
        </div>
        <img
          src={`http://localhost:3002/posts/${selectedImage.image}`}
          alt="imag"
          className="image-own-post"
        />
        <div className="lowerzone">
          <IconsZone />
        </div>
      </div>
      <div className="right-own-post" ref={divRefFather}>
        <div className="header-own-post">
          <HeaderPost />
        </div>
        <Container className="d-flex pt-3">
          <div className="img-header-post">
            <img
              src={`http://localhost:3002/posts/${selectedImage.image}`}
              alt="img"
            />
          </div>
          <Container className="d-flex align-items-center">
            <h5>{user.username}</h5>
            <p className="d-flex mb-1 ms-2 decription-own-post">
              {selectedImage.description}
            </p>
          </Container>
        </Container>
        <div className="own-post-coments mt-2">
          {coments.map((coment) => {
            return (
              <Container className="d-flex pt-3">
                <div className="img-header-post">
                  <img
                    src={`http://i.pravatar.cc/150?u=${coment.id}`}
                    alt="img"
                  />
                </div>
                <Container className="d-flex align-items-center">
                  <h5>{getRandomUsernames()}</h5>
                  <p className="d-flex mb-1 ms-2 decription-own-post">
                    {coment.coment}
                  </p>
                </Container>
              </Container>
            );
          })}
        </div>
        <div className="lowerzone">
          <IconsZone />
        </div>
        <div className="own-post-input">
          <textarea type="text" placeholder="Add a coment..." />
        </div>
      </div>
    </div>
  );
};
