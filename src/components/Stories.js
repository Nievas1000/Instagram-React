import { useEffect, useRef, useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

export const Stories = ({ data }) => {
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

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

  useEffect(() => {
    const container = scrollContainerRef.current;
    const handleScroll = () => {
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(
        container.scrollLeft + container.clientWidth < container.scrollWidth
      );
    };
    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="container-stories" ref={scrollContainerRef}>
      {showLeftArrow && (
        <div className="arrow-left-storie" onClick={handleScrollLeft}>
          <BsFillArrowLeftCircleFill />
        </div>
      )}
      {data.map((x) => {
        return (
          <div className="storie">
            <img src={x.image} alt="img" />
            <span>
              {x.userName.length > 8
                ? `${x.userName.substring(0, 10)}...`
                : x.userName}
            </span>
          </div>
        );
      })}
      {showRightArrow && (
        <div className="arrow-rigth-storie" onClick={handleScrollRight}>
          <BsFillArrowRightCircleFill />
        </div>
      )}
    </div>
  );
};
