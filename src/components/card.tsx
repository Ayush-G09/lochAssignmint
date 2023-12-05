import React from "react";
import { CardType } from "../types/types";
import Checkmark from "../assets/checkmark";

type Props = {
  data: CardType;
  key: number;
};

function Card({ data, key }: Props) {
  return (
    <div
      key={key}
      className="w-[210px] lg:w-[189.7px] h-[150px] lg:h-[171.5px] bg-linear-card bg-white rounded-lg flex flex-col px-[10px] pt-1 cursor-pointer gap-3"
    >
      <div className="w-full h-[25%] flex items-center">
        <div className="flex flex-1 justify-start">{data.icon}</div>
        <div className="h-full w-[20%] text-[#19191A] font-semibold leading-[120%] text-sm flex items-start justify-center">
          {data.saved ? <Checkmark /> : "Save"}
        </div>
      </div>
      <div className="w-[189.7px] font-medium text-sm text-[#19191A]">
        {data.content}
      </div>
      {data.children}
    </div>
  );
}

export default Card;
