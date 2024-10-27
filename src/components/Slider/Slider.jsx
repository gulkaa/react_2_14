import React from "react";
import Slider from "react-slick";
import s from './Slider.module.css';

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider className={s.skiderr} {...settings}>
      <div>
        <img className={s.kartinka} src="https://i.pinimg.com/736x/5c/bc/b8/5cbcb8f735f95e25f508ae9582bf9854.jpg"></img>
      </div>
      <div>
      <img className={s.kartinka} src="https://i.pinimg.com/564x/3f/63/34/3f6334a33a4aa3d157dc4f93ff01c4c7.jpg"></img>
      </div>
      <div>
      <img className={s.kartinka} src="https://i.pinimg.com/564x/0c/ec/db/0cecdb3e76fb042412ae825b4d8e6144.jpg"></img>
      </div>
      <div>
      <img className={s.kartinka} src="https://i.pinimg.com/736x/f5/de/33/f5de33afabae4d2bd3c09a5e907d5025.jpg"></img>
      </div>
      <div>
      <img className={s.kartinka} src="https://i.pinimg.com/736x/b3/60/46/b36046f8f3de6eb11c84409ac3a3d6ee.jpg"></img>
      </div>
    </Slider>
  );
}