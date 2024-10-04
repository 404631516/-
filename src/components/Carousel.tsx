// components/Carousel.tsx
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Typography } from "@mui/material";
import { Autoplay } from "swiper/modules";

const Carousel = () => {
  const skills = useSelector((state: RootState) => state.portfolio.skills);

  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={3}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
    >
      {skills.map((skill, index) => (
        <SwiperSlide key={index}>
          <Typography variant="h4" color="primary">
            {skill}
          </Typography>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
