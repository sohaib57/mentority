import React from "react";

const CrouselCard = ({ el, activeHoverIndex, handleHover, handleHoverParent, index }) => {
  
  const onMouseHover = () => {
    handleHover(index);
    handleHoverParent(index);
  }
  return (
    <div
      className={
        activeHoverIndex != -1 && index == activeHoverIndex
          ? "maindiv"
          : "maindiv-default"
      }
      onMouseEnter={(e) =>
        window.innerWidth > 700 ? onMouseHover(index) : e.preventDefault()
      }
      onMouseLeave={(e) =>
        window.innerWidth > 700 ? onMouseHover(-1) : e.preventDefault()
      }
    >
      <div className="empty-space" />
      <div
        className="row"
        style={{ paddingRight: "1.5rem", paddingLeft: "0.5rem" }}
      >
        <hr
          style={{
            width: "100%",
            backgroundColor: "white",
            height: "2px",
            opacity:
              window.innerWidth > 700 &&
              activeHoverIndex != -1 &&
              index == activeHoverIndex
                ? 1
                : 0.4,
          }}
        />
        <div className="name">
          <p style={{ fontSize: "9px" }}>{el.name}</p>
        </div>
        <div>
          <p
            style={{
              opacity:
                window.innerWidth > 700 &&
                activeHoverIndex != -1 &&
                index == activeHoverIndex
                  ? 1
                  : 0.4,
            }}
            className="funel"
          >
            {el.fun}
          </p>
        </div>
        <div>
          {activeHoverIndex != -1 && index == activeHoverIndex ? (
            <p className="text-description">{el.description}</p>
          ) : null}
        </div>
      </div>
      <div className="empty-space" />
    </div>
  );
};

export default CrouselCard;
