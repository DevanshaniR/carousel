import React, { useState, useEffect } from "react";
import axios from "axios";
import ArrowBackIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIcon from "@material-ui/icons/ArrowForwardIos";
import Title from "./Title";
import SubTitle from "./SubTitle";

function CarouselItem(props) {
  //   const infinite = props.infinite;
  const [SliderData, setSlides] = useState([]);
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  useEffect(() => {
    const getSlides = async () => {
      return axios
        .get(
          `${process.env.REACT_APP_SERVICE_NAME}/carousel?slides=${props.slides}`
        )
        .then((res) => {
          console.log(res.data);
          setSlides(res.data);
        })
        .catch((err) => console.log(err));
    };
    getSlides();
  }, [props.slides]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="slider">
      {length > 1 && (
        <div>
          <ArrowBackIcon className="left-arrow" onClick={prevSlide} />
          <ArrowForwardIcon className="right-arrow" onClick={nextSlide} />
        </div>
      )}
      {SliderData.map((slide, index) => {
        return (
          <div>
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              <Title title={slide.title} />
              <SubTitle subTitle={slide.subTitle} />
              {index === current && (
                <img src={slide.image} alt="" className="image" />
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
}
export default CarouselItem;
