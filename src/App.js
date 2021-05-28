import './App.css';
import React, { useEffect, useRef, useState } from 'react';

const App = () => {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [seconds, setSeconds] = useState();
  const [minutes, setMinutes] = useState();

  // const [days, setDays] = useState();
  // const [weeks, setWeeks] = useState();

  let interval = useRef();

  const startTimer = () => {
    // set date were countng down to

    const futureDate = new Date('June 20, 2024 00:00:00').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = futureDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // const months =
      // const weeks =

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    // return () => {
    //   clearInterval(interval.current);
    // };
  }, []);
  return (
    <section className='main-timer'>
      <section className='timer-1'>
        <div>
          <h2>Count down to my First $1M</h2>
        </div>
      </section>

      <section className='timer-2'>
        <section className='min-timer'>
          <h4>111</h4>

          <h4>
            <small>Years</small>
          </h4>
        </section>
        <h4>
          <span>:</span>
        </h4>

        <section className='min-timer'>
          <h4>88</h4>
          <h4>
            <small>Months</small>
          </h4>
        </section>
        <h4>
          <span>:</span>
        </h4>
        <section className='min-timer'>
          <h4>88</h4>
          <h4>
            <small>Weeks</small>
          </h4>
        </section>
        <h4>
          <span>:</span>
        </h4>
        <section className='min-timer'>
          <h4>{days}</h4>
          <h4>
            <small>Days</small>
          </h4>
        </section>
        <section className='min-timer'>
          <h4>{hours}</h4>
          <h4>
            <small>Hours</small>
          </h4>
        </section>
        <section className='min-timer'>
          <h4>{minutes}</h4>
          <h4>
            <small>Mins</small>
          </h4>
        </section>
        <section className='min-timer'>
          <h4>{seconds}</h4>
          <h4>
            <small>Seconds</small>
          </h4>
        </section>
      </section>
    </section>
  );
};

export default App;
