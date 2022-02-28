import React, { useEffect } from "react";
//Redux
import { useSelector, useDispatch } from "react-redux";
import { fetchPlays } from "../reducers/playsSlice";
//Components
import Play from "./Play";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const PlayList = () => {
  //Fetching data
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPlays());
  }, [dispatch]);
  //Getting data back
  const plays = useSelector((state) => state.plays.plays);
  console.log(plays);

  return (
    <>
      <Swiper
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        }}
        className="mySwiper"
        modules={[Navigation]}
      >
        {plays.map((play) => (
          <SwiperSlide key={play.id}>
            <Play play={play} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default PlayList;
