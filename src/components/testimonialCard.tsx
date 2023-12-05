import React from "react";
import { Testimonial } from "../types/types";

type Props = { data: Testimonial; key: number };

function TestimonialCard({ data, key }: Props) {
  return (
    <div
      key={key}
      className="min-w-[353px] w-fit h-[110px] xl:h-[136px] p-2 lg:p-5 bg-[#FFFFFF] shadow-input-shadow rounded-xl flex flex-col"
    >
      <div className="flex items-center gap-2 mb-5">
        <div className="font-semibold text-base text-[#19191A] leading-[120%]">
          {data.name}
        </div>
        <div className="text-sm font-medium text-[#96979A]">{data.title}</div>
      </div>
      <div className="font-mediun text-[#1D2129] text-base leading-[120%] overflow-y-scroll no-scrollbar scroll-smooth">
        {data.content}
      </div>
    </div>
  );
}

export default TestimonialCard;
