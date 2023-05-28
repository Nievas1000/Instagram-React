import image from "../../assets/perfil.jpg";
import { IconsZone } from "../post/IconsZone";
import { HeaderPost } from "../post/HeaderPost";

export const Post = ({ divRefSon, divRefFather }) => {
  return (
    <div className="container-own-post d-flex justify-content-center align-items-center">
      <div className="modal-own-post" ref={divRefSon}>
        <div className="header-own-post mobile-header">
          <HeaderPost />
        </div>
        <img src={image} alt="imag" className="image-own-post" />
        <div className="lowerzone">
          <IconsZone />
        </div>
      </div>
      <div className="right-own-post" ref={divRefFather}>
        <div className="header-own-post">
          <HeaderPost />
        </div>
        <div className="own-post-coments"></div>
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
