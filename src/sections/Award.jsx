import { useEffect, useState } from "react";
import { AwardCard } from "../components";
import { client } from "../client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Tilt } from "react-tilt";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 15, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.0, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const Award = () => {
  const [awards, setAwards] = useState([]);

  useEffect(() => {
    const query = '*[_type == "award"]';
    client.fetch(query).then((data) => {
      setAwards(data);
    });
  }, []);

  return (
    <section className="pt-20 pb-10">
      <h1 className="section-title">Award</h1>
      <div className="section-underline"></div>

      {/* Swiper React Component */}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        // spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {awards.map((award, index) => (
          <SwiperSlide key={index}>
            <Tilt options={defaultOptions}>
              <AwardCard key={index} {...award} />
            </Tilt>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
export default Award;
