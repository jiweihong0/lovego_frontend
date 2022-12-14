import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../Card/card";
import lefticon from '../../imgs/lefticon.svg'
function Slick() {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <img
                className={className}
                style={{ ...style,minWidth: "25px",minHeight: "100px",display: "block", transform: "rotate(-180deg) translate(0,50%)"}}
                onClick={onClick}
                src={lefticon}
                alt="righticon"
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <img
            className={className}
            style={{ ...style,minWidth: "25px",minHeight: "100px",display: "block"}}
            onClick={onClick}
            src={lefticon}
            alt="lefticon"
          />
        );
      }
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        touchMoved: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
            }
          ] 
      };
    return (
        <div className="popular-frame">
            <h2 className="popular-text">強檔商品</h2>
            <Slider {...settings} style={{width: '90%', minWidth: '400px'}}>
                {
                    [1,2,3,4,5,6,7,8,9].map((item, index) =>{return <div key={index}><Card/></div>})
                }
            </Slider>
      </div>
      );
}

export default Slick;