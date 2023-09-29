import React, { Component, useEffect, useRef, useState } from "react";

const Countdown = () => {
  const [timerDays, settimerDays] = useState("00");
  const [timerHours, settimerHours] = useState("00");
  const [timerMinutes, settimerMinutes] = useState("00");
  const [timerSeconds, settimerSeconds] = useState("00");

  let interval = useRef();
  const startTimer = () => {
    const countdownDate = new Date("August 30 2022 00:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        // stop our timer
        clearInterval(interval.current);
      } else {
        // updated timer
        settimerDays(days);
        settimerHours(hours);
        settimerMinutes(minutes);
        settimerSeconds(seconds);
      }
    }, 1000);
  };

  //   componentDidMount
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });
  return (
    <>
      <span className="counterDeal"> {timerDays} <br/> <p> Days </p> </span>
      <span className="counterDeal"> {timerHours} <br/> <p> Hours </p> </span>
      <span className="counterDeal"> {timerMinutes} <br/> <p> Min </p> </span>
      <span className="counterDeal"> {timerSeconds} <br/> <p> Sec </p> </span>
    </>
  );
};

export default Countdown;
