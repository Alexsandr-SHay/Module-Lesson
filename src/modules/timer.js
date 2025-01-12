const timer = (deadline) => {
  const timerHourse = document.querySelector("#timer-hours");
  const timerMinutes = document.querySelector("#timer-minutes");
  const timerSeconds = document.querySelector("#timer-seconds");
  let idInterval;

  const getTimeRemaning = () => {
    const dateStop = new Date(deadline).getTime();
    const dateNow = new Date().getTime();
    const timeRemaning = (dateStop - dateNow) / 1000;
    const hours = Math.floor(timeRemaning / 60 / 60);
    const minutes = Math.floor((timeRemaning / 60) % 60);
    const seconds = Math.floor(timeRemaning % 60);

    return { timeRemaning, hours, minutes, seconds };
  };

  const updateClock = () => {
    const getTime = getTimeRemaning();

    if (getTime.timeRemaning > 0) {
      timerHourse.textContent = getTime.hours.toString().padStart(2, "0");
      timerMinutes.textContent = getTime.minutes.toString().padStart(2, "0");
      timerSeconds.textContent = getTime.seconds.toString().padStart(2, "0");
    } else {
      clearInterval(idInterval);
    }
  };

  const start = () => {
    updateClock();
    idInterval = setInterval(updateClock, 1000);
  };

  start();
};

export default timer;
