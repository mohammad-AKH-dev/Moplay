import React from "react";
import PlanBoxType from "@/app/types/PlanBoxType";
import { FaGooglePlay } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { FaArrowRight } from "react-icons/fa6";
import Button from "../Button/Button";
import { totalmem } from "os";

function PlanBox(props: PlanBoxType) {
  const { title, price, deadLine, details } = props;
  return (
    <div
      className={`pricing-plan__box px-6 rounded-2xl border-2 before:w-[30px] max-w-[350px] 
        min-w-[350px] sm:min-w-max mx-auto sm:mr-0 sm:ml-0
        before:h-[30px] before:-rotate-[55deg] before:-top-[.9rem] lg:before:rotate-[40deg] 

      before:right-[5.5rem] sm:before:right-[3.5rem] md:before:right-[5.5rem]  lg:before:right-[4.3rem] xl:before:rotate-[33deg] 
       before:absolute xl:before:right-14  
          lg:before:-top-[.8rem] relative 
        after:h-[30px] after:w-[30px] after:rotate-[55deg] after:left-[5.5rem] sm:after:left-[3.5rem] md:after:left-[5.5rem] lg:after:-rotate-[40deg] 
        lg:after:left-[4.3rem] 
        xl:after:-rotate-[33deg]  after:absolute xl:after:left-14 after:-top-[.9rem] lg:after:-top-[.8rem]
        ${
          title === "premium"
            ? "border-red before:bg-red after:bg-red"
            : "border-link before:bg-link after:bg-link"
        }`}
    >
      <div className="cleaner absolute top-0 z-20  w-[80%] mx-auto h-[30px] bg-white dark:bg-main"></div>
      <span
        className={`box-header text-white text-[22px] absolute -top-5 left-0 
       ${title === "premium" ? "bg-red" : "bg-link"}  
       right-0 w-[134px] z-50
       h-[42px] block mx-auto pt-1 rounded-b-xl font-bold capitalize`}
      >
        {title}
      </span>
      <div
        className={`icon-wrapper mt-12 mb-8 w-[80px] text-center
        mx-auto border-[3px] flex items-center justify-center ${
          title === "premium" ? "border-red text-red" : "border-link text-link"
        } h-[80px] rounded-full`}
      >
        <FaGooglePlay />
      </div>
      <div className="pricing-plan__deadline text-left font-bold">
        <span
          className={`price ${
            title === "premium" ? "text-red" : "text-link"
          } text-[50px]`}
        >
          ${price}
        </span>
        <span className="deadline text-[16px] text-footer capitalize">
          /{deadLine}
        </span>
      </div>
      <div className="divider"></div>
      <ul className="options text-[16px] text-left flex flex-col gap-y-4 text-footer mb-8">
        {details.map((detail) => (
          <div className="option-wrapper flex items-center gap-x-1">
            <TiTick
              className={`${title === "premium" ? "text-red" : "text-link"}`}
            />
            <li className="option">{detail}</li>
          </div>
        ))}
      </ul>
      <Button
        title="CHOOSE PLAN"
        customStyle={`mb-8 w-full flex-row-reverse ${
          title === "premium" ? "bg-red" : "bg-link"
        } transition-all hover:bg-red`}
      >
        <FaArrowRight />
      </Button>
    </div>
  );
}

export default PlanBox;
