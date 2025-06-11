"use client";
import PlanBoxType from "@/app/types/PlanBoxType";
import React, { useState } from "react";
import PlanBox from "../../modules/PlanBox/PlanBox";

function PricingPalns() {
  const [plans, setPlans] = useState<PlanBoxType[]>([
    {
      id: 0,
      title: "basic",
      price: 25,
      deadLine: "days",
      details: [
        "7 Days Stream",
        "720p HD Resolution",
        "Movies, Tv Shows, Live Tv",
        "Custom Request",
        "24/7 Support",
      ],
    },
    {
      id: 1,
      title: "standard",
      price: 35,
      deadLine: "Month",
      details: [
        "1 Month Stream",
        "1080p HD Resolution",
        "Movies, Tv Shows, Live Tv",
        "Custom Request",
        "24/7 Support",
      ],
    },
    {
      id: 2,
      title: "premium",
      price: 79,
      deadLine: "Month",
      details: [
        "12 Months Stream",
        "4k HD Resolution",
        "Movies, Tv Shows, Live Tv",
        "Custom Request",
        "24/7 Support",
      ],
    },
    {
      id: 3,
      title: "enterprise",
      price: 189,
      deadLine: "One Time",
      details: [
        "Lifetime Stream",
        "Ultra HD Resolution",
        "Movies, Tv Shows, Live Tv",
        "Custom Request",
        "24/7 Support",
      ],
    },
  ]);
  return (
    <section className="pricing-plans__section mt-24 container text-center">
      <div className="pricing-plans__header">
        <h5 className="pricing-plans__subtitle tracking-[.3rem] text-link text-[15px] sm:text-[18px] uppercase font-bold">
          Our Pricing
        </h5>
        <h3 className="pricing-plans__title dark:text-white font-bold tracking-wider text-[28px] sm:text-[35px] mt-4">
          Choose Your Subscription <marker className="text-link">Plan</marker>
        </h3>
      </div>
      <div className="pricing-plans__boxes grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-12 gap-x-6 mt-12">
        {
            plans.map(plan => (
                <PlanBox {...plan}/>
            ))
        }
      </div>
    </section>
  );
}

export default PricingPalns;
