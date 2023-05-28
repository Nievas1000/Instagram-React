import { IconsZone } from "../post/IconsZone";
import { HeaderPost } from "../post/HeaderPost";
import { useLazyQuery } from "@apollo/client";
import { GET_COMENTS_BY_POST } from "../../graphql/mutations";
import { useEffect, useState } from "react";

export const Post = ({ divRefSon, divRefFather, selectedImage }) => {
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
  console.log(coments);
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
        <div className="own-post-coments">
          {coments.map((coment) => {
            return <p>{coment.coment}</p>;
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
