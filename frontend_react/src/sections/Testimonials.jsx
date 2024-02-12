import { TestimonialCard } from "../components";
import { client } from "../client";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import { reviews } from "../constants";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const query = '*[_type == "reviews"]';
    client.fetch(query).then((data) => setReviews(data));
  }, []);

  return (
    <section id="reviews" className="pt-16 pb-10 relative">
      <h1 className="section-title">Reviews</h1>
      <div className="section-underline"></div>
      {/* Swiper React Component */}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        // spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}>
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <TestimonialCard {...review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
export default Testimonials;
