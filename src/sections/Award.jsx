import { useEffect, useState } from "react";
import { AwardCard } from "../components";
import { client } from "../client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
        pagination={{ clickable: true }}>
        {awards.map((award, index) => (
          <SwiperSlide key={index}>
            <AwardCard key={index} {...award} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
export default Award;
