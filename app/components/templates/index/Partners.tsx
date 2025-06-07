"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

function Partners() {
  const [partners, setPartners] = useState([
    "/images/partners/partner-1.png",
    "/images/partners/partner-2.png",
    "/images/partners/partner-3.png",
    "/images/partners/partner-4.png",
    "/images/partners/partner-5.png",
    "/images/partners/partner-6.png",
    "/images/partners/partner-7.png",
  ]);
  return (
    <section className="partners-section mt-24 bg-light py-16">
      <div className="partners-section__wrapper container text-center">
        <div className="partners__header">
          <h5 className="partners__subtitle tracking-[.3rem] text-link text-[15px] sm:text-[18px] uppercase font-bold">
            Partner
          </h5>
          <h3 className="partners__title text-white font-bold tracking-wider text-[28px] sm:text-[35px] mt-4">
            Our Awesome <marker className="text-link">Partners</marker>
          </h3>
        </div>
        <div className="partners-slider__wrapper mt-12">
          <Swiper
            className="mySwiper"
            spaceBetween={20}
            loop
            modules={[Autoplay]}
            slidesPerView={1}
            breakpoints={{
              320: {
                slidesPerView: 1
              },
              430: {
                slidesPerView: 3
              },
              650: {
                slidesPerView: 4
              },
              1024: {
                slidesPerView: 6
              }
            }}
          >
            {partners.map((partner) => (
              <SwiperSlide>
                <div
                  className="partner-wrapper border transition-all hover:border-link
                 rounded-2xl flex items-center justify-center min-w-[130px] p-4 border-[rgba(117,127,149,.25)]"
                >
                  <Image
                    width={2000}
                    height={2000}
                    src={partner}
                    className="min-w-[100px]"
                    alt="partner"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Partners;
