import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Is there evidence that our additional spending on veterinary care has no or very little marginal gains? That is after all the whole problem with health care spending: we are spending more money but not getting anything for it.",
    },
    {
      img: profilePic2,
      review:
        "Government pet healthcare service, now that would be funny. I have seen people spend 1000s on exotic treatments for their pets such as chiropractics and electro therapies.",
    },
    {
      img: profilePic3,
      review:
        "A cursory googling didn’t turn up a historical trend in pet ownership, but I’d be willing to bet that over the period in question – in which disposable income grew – you wold find increasing numbers of pets per capita in this country; meaning more vet costs. I’m sure it wouldn’t eliminate the upward trend on vet spending, but would flatten it.",
    },
    {
      img: profilePic4,
      review:
        "I can understand being upset by an irresponsible owner given your accident, but it sounds like your dislike began a long time ago.You are my favorite economist and normally so wise, but I have a hard rule of distrusting anyone who does not like animals (esp. dogs).Sad day.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
