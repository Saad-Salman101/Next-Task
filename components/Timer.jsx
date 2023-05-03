import React, { useState, useEffect } from 'react';

const Timer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const days = timeLeft.days.toString().padStart(2, '0');
  const hours = timeLeft.hours.toString().padStart(2, '0');
  const minutes = timeLeft.minutes.toString().padStart(2, '0');
  const seconds = timeLeft.seconds.toString().padStart(2, '0');

  return (
    seconds<0?<h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',width:"390",height:"59"}}>No time left</h1>:    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap',    
    zIndex: 1 }} >
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',margin:'3rem', gap: '0.5rem', textAlign: 'center' }}>
      <h1 style={{   margin: 0 }}>{days}</h1>
      <h2 style={{  fontSize: '1rem', margin: 0 }}>DAYS</h2>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',margin:'3rem', gap: '0.5rem', textAlign: 'center' }}>
      <h1 style={{   margin: 0 }}>{hours}</h1>
      <h2 style={{  fontSize: '1rem', margin: 0 }}>HOURS</h2>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',margin:'3rem', gap: '0.5rem', textAlign: 'center' }}>
      <h1 style={{   margin: 0 }}>{minutes}</h1>
      <h2 style={{  fontSize: '1rem', margin: 0 }}>MINUTES</h2>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',margin:'3rem', gap: '0.5rem', textAlign: 'center' }}>
      <h1 style={{   margin: 0 }}>{seconds}</h1>
      <h2 style={{  fontSize: '1rem', margin: 0 }}>SECONDS</h2>
    </div>
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
