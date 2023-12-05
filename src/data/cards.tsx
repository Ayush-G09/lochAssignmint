import BarChart from "../assets/barChart";
import Bell from "../assets/bell";
import Clock from "../assets/clock";
import { CardType } from "../types/types";

export const cards: CardType[] = [
  {
    icon: <Bell />,
    saved: false,
    content: "We’ll be sending notifications to you here",
    children: (
      <div className="w-[156px] h-[35px] flex items-center bg-[#FFF] rounded-md border-solid border-[0.7px] border-[#D4D4D4]"></div>
    ),
  },
  {
    icon: <BarChart />,
    saved: true,
    content: "Notify me when any wallets move more than",
    children: (
      <select
        className="w-[100px] rounded-sm bg-gray-50"
        name="amount"
        id="amount"
      >
        <option value="1000">$1000</option>
        <option value="500">$500</option>
      </select>
    ),
  },
  {
    icon: <Clock />,
    saved: true,
    content: "Notify me when any wallet dormant for",
    children: (
      <div className="w-full flex flex-col gap-3">
        <select
          className="w-[100px] rounded-sm bg-gray-50"
          name="days"
          id="days"
        >
          <option value="1000">&gt; 30 Days</option>
          <option value="500">&gt; 15 Days</option>
        </select>
      </div>
    ),
  },
];
