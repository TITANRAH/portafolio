"use client";

import CountUp from "react-countup";

interface Props {
  containerStyle?: string;
  icon?: JSX.Element;
  endCountNum?: number;
  startCountText?: string;
  badgeText?: string;
}

const Badge = ({
  containerStyle,
  icon,
  endCountNum,
  startCountText,
  badgeText,
}: Props) => {
  return (
    <div className={`badge ${containerStyle}`}>
      <div className="text-3xl text-primary">{icon}</div>

      <div className="flex items-center gap-x-2">
        <div className="text-4xl leading-none font-bold text-primary">
          {/* esto es un contador autmatico le paso cuando empieza en delay cuanto dura el conteo y el numero al que llegara  */}
          {startCountText}
          <CountUp end={endCountNum!} delay={1} duration={5}/>
        </div>
        <div className="max-w-[70px] leading-none text-[15px] font-bold text-black">
          {badgeText}
        </div>
      </div>
    </div>
  );
};

export default Badge;
