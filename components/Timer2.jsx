import React, { useState, useEffect } from "react";

const Timer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const days = timeLeft.days.toString().padStart(2, "0");
  const hours = timeLeft.hours.toString().padStart(2, "0");
  const minutes = timeLeft.minutes.toString().padStart(2, "0");
  const seconds = timeLeft.seconds.toString().padStart(2, "0");

  return (
    <div className="flex flex-wrap justify-center items-center ">
      {days==0 && hours==0 && minutes==0 && seconds == 0 ? (
        <h1 className="w-full h-20 flex justify-center items-center mt-10 text-2xl md:text-4xl font-bold text-white">
          Time Expired
        </h1>
      ) : (
        <>
          <div className="flex w-[390px] h-[59px] justify-evenly">
            <div className="flex flex-col items-center gap-2 ml-0">
              <h1 className="text-4xl font-light tracking-[4px]">{days}</h1>
              <h2 className="text-sm font-light tracking-[2px]">DAYS</h2>
            </div>
            <div className="flex flex-col items-center gap-2 ml-4">
              <h1 className="text-4xl font-light tracking-[4px]">{hours}</h1>
              <h2 className="text-sm font-light tracking-[2px]">HOURS</h2>
            </div>
            <div className="flex flex-col items-center gap-2  ml-4">
              <h1 className="text-4xl font-light tracking-[4px]">{minutes}</h1>
              <h2 className="text-sm font-light tracking-[2px]">MINUTES</h2>
            </div>
            <div className="flex flex-col items-center gap-2  ml-4">
              <h1 className="text-4xl font-light tracking-[4px]">{seconds}</h1>
              <h2 className="text-sm font-light tracking-[2px]">SECONDS</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const calculateTimeLeft = (targetDate) => {
  const difference = targetDate.getTime() - new Date().getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / 1000 / 60) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  return { days, hours, minutes, seconds };
};

export default Timer;
