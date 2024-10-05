import { useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

//Change this date to whatever date you want to countdown 
const COUNTDOWN_FROM = "2024-08-01";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const CountDown = () => {
  return (
    <div className=" p-4">
      <div className="mx-auto flex w-full max-w-xl items-center">
        <CountdownItem unit="Day" text="Days" />
        <CountdownItem unit="Hour" text="Hours" />
        <CountdownItem unit="Minute" text="Minutes" />
        <CountdownItem unit="Second" text="Seconds" />
      </div>
    </div>
  );
};

const CountdownItem = ({ unit, text }) => {
  const { ref, time } = useTimer(unit);

  return (
    <div className="flex h-24 w-1/4 flex-col items-center justify-center gap-1 md:gap-2">
      <div className="relative w-full overflow-hidden text-center">
        <span
          ref={ref}
          className="block text-2xl  text-[#2a2a2a] md:text-3xl lg:text-4xl xl:text-6xl font-[neu-thin] font-bold "
        >
          {time}
        </span>
      </div>
      <span className="text-xs text-[#2a2a2a] md:text-sm lg:text-base text-center font-extralight">
        {text}
      </span>
    </div>
  );
};

export default CountDown;


const useTimer = (unit) => {
  const [ref, animate] = useAnimate();

  const intervalRef = useRef(null);
  const timeRef = useRef(0);

  const [time, setTime] = useState(0);

  useEffect(() => {
    intervalRef.current = setInterval(handleCountdown, 1000);

    return () => clearInterval(intervalRef.current || undefined);
  }, []);

  const handleCountdown = async () => {
    const end = new Date(COUNTDOWN_FROM);
    const now = new Date();
    const distance = +end - +now;

    let newTime = 0;

    if (unit === "Day") {
      newTime = Math.floor(distance / DAY);
    } else if (unit === "Hour") {
      newTime = Math.floor((distance % DAY) / HOUR);
    } else if (unit === "Minute") {
      newTime = Math.floor((distance % HOUR) / MINUTE);
    } else {
      newTime = Math.floor((distance % MINUTE) / SECOND);
    }

    if (newTime !== timeRef.current) {
      await animate(
        ref.current,
        { y: ["0%", "-50%"], opacity: [1, 0] },
        { duration: 0.35 }
      );

      timeRef.current = newTime;
      setTime(newTime);

      await animate(
        ref.current,
        { y: ["50%", "0%"], opacity: [0, 1] },
        { duration: 0.35 }
      );
    }
  };

  return { ref, time };
};