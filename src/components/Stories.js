import { useRef } from "react";
import image from "../assets/perfil.jpg";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

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

export const Stories = () => {
  const scrollContainerRef = useRef(null);

  const handleScrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  };

  const handleScrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  };
  return (
    <div className="container-stories" ref={scrollContainerRef}>
      <div className="arrow-left-storie" onClick={handleScrollLeft}>
        <BsFillArrowLeftCircleFill />
      </div>
      {data.map((x) => {
        return (
          <div className="storie">
            <img src={x.image} alt="img" />
            <span>{x.userName}</span>
          </div>
        );
      })}
      <div className="arrow-rigth-storie" onClick={handleScrollRight}>
        <BsFillArrowRightCircleFill />
      </div>
    </div>
  );
};
