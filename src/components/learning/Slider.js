import { useState } from "react";
import "./slider.css"; // import your own CSS file


const Slider = () => {
  const items1 = [
    {
      digit: "01",
      head: "Upcoming Event 1",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      digit: "02",
      head: "Upcoming Event 2",
      para: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      digit: "03",
      head: "Upcoming Event 3",
      para: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      digit: "04",
      head: "Upcoming Event 4",
      para: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      digit: "05",
      head: "Upcoming Event 5",
      para: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      digit: "06",
      head: "Events Online-Offline",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
  const [items,setItems]=useState(items1)


  const [currentItem, setCurrentItem] = useState(0);

  const slideToNext = () => {
    // if (currentItem < items.length - 5) {
    //   setCurrentItem(currentItem + 1);
    // } else {
    //   setCurrentItem(0);
    // }
    const arrItem=items;
    const firstItem = arrItem.shift();
    arrItem.push(firstItem);

  };

  const slideToPrev = () => {
    setCurrentItem(currentItem === 0 ? items.length - 1 : currentItem - 1);
  };

  return (
    <div className="slider">
      <div
        className="slider-items"
        // style={{ transform: `translateX(-${currentItem * 20}%)` }}
      >
        {items.slice(0, 5).map((item, index) => (
          <div className="slider-item" key={index}>
            <div className="slider-container">
              <div className="slider-container-digit">{item.digit}</div>
              <div className="slider-container-head">{item.head}</div>
              <div className="slider-container-para blackheading">
                {item.para}
              </div>
            </div>
          </div>
        ))}
        {/* {items.slice(5).map((item, index) => (
          <div className="slider-item" key={index + 5}>
            <div className="slider-container">
              <div className="slider-container-digit">{item.digit}</div>
              <div className="slider-container-head">{item.head}</div>
              <div className="slider-container-para blackheading">
                {item.para}
              </div>
            </div>
          </div>
        ))} */}
      </div>
      <button className="slider-btn slider-btn-prev" onClick={slideToPrev}>
        Prev
      </button>
      <button className="slider-btn slider-btn-next" onClick={slideToNext}>
        Next
      </button>
    </div>
  );
};

export default Slider;
