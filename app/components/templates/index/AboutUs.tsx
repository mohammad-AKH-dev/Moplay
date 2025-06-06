import Image from "next/image";
import React from "react";
import { CiStreamOn } from "react-icons/ci";
import { PiVideoFill } from "react-icons/pi";


function AboutUs() {
  return (
    <section className="about-us__section bg-light mt-24 overflow-hidden">
      <div className="about-us__content container grid grid-cols-1 lg:grid-cols-2 lg:gap-x-24 gap-y-20 sm:gap-y-12 py-12 lg:py-24">
        <div className="about-us__content__left-section ">
          <h6
            className="about-us__subtitle text-[15px] sm:text-[18px] uppercase text-link tracking-[.3rem] font-bold
           animate__animated  animate__fadeInUp"
          >
            Why Choose Us
          </h6>
          <h2 className="about-us__title animate__animated  animate__fadeInUp font-bold tracking-wider text-[28px] sm:text-[35px] mt-4">
            We Care About Our <marker className="text-link">Customers</marker>{" "}
            Satisfaction
          </h2>
          <p className="about-us__caption text-[14px] sm:text-[16px] animate__animated  animate__fadeInLeft text-footer leading-7 my-3">
            There are many variations of passages available but the majority
            have suffered alteration in some form by injected humour randomised
            words which don't look even tend to repeat predefined slightly
            believable.
          </p>
          <div className="flex w-full flex-col mt-8">
            <div className="card rounded-box grid h-20 place-items-center">
              <div className="content-wrapper flex items-center gap-x-4 justify-center">
                <div
                  className="icon-wrapper animate__animated animate__fadeInDown
                  -translate-y-2 min-w-[70px] min-h-[70px] flex items-center justify-center bg-link rounded-full outline outline-3
                 border-light border-[6px] text-[44px] outline-link"
                >
                  <CiStreamOn />
                </div>
                <div className="content">
                  <h4 className="content-title text-[17px] sm:text-[22px] animate__animated animate__fadeInDown">
                    Best Streaming Platform
                  </h4>
                  <p className="content-caption text-[14px] min-w-[234px]  xl:text-[16px] pt-2 sm:pt-0 sm:leading-8 text-footer animate__animated animate__fadeInUp">
                    There are many variations of passages available the majority
                    have suffered alteration injected humour.
                  </p>
                </div>
              </div>
            </div>
            <div className="divider"></div>
            <div className="card rounded-box grid h-20 place-items-center">
              <div className="content-wrapper flex items-center gap-x-4 justify-center">
                <div
                  className="icon-wrapper animate__animated animate__fadeInDown
                  -translate-y-2 min-w-[70px] min-h-[70px] flex items-center justify-center bg-link rounded-full outline outline-3
                 border-light border-[6px] text-[44px] outline-link"
                >
                  <PiVideoFill/>
                </div>
                <div className="content">
                  <h4 className="content-title text-[17px] sm:text-[22px] animate__animated animate__fadeInDown">
                    Stream With No Interruptions
                  </h4>
                  <p className="content-caption text-[14px]  min-w-[234px] xl:text-[16px] pt-2 sm:pt-0 sm:leading-8 text-footer animate__animated animate__fadeInUp">
                    There are many variations of passages available the majority
                    have suffered alteration injected humour.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-us__content__right-section ">
          <div className="image-content__wrapper rounded-l-xl rounded-b-xl">
            <Image
              width={2000}
              height={2000}
              src={"/images/about-us.jpg"}
              alt="about-us"
              className="rounded-l-[35%] rounded-tr-[10%] border-[11px] lg:translate-y-24 animate__animated  animate__fadeInUp outline outline-link
               border-light object-cover rounded-b-[40%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
