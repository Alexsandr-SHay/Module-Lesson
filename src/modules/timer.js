const one = (deadline) => {
  const timerHourse = document.querySelector("#timer-hours");
  const timerMinutes = document.querySelector("#timer-minutes");
  const timerSeconds = document.querySelector("#timer-seconds");

  const getTimeRemaning = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaning = (dateStop - dateNow) / 1000;
    let hours = Math.floor(timeRemaning / 60 / 60);
    let minutes = Math.floor((timeRemaning / 60) % 60);
    let seconds = Math.floor(timeRemaning % 60);

    return { timeRemaning, hours, minutes, seconds };
  };

  const updateClock = () => {
    let getTime = getTimeRemaning();

    timerHourse.textContent = getTime.hours;
    timerMinutes.textContent = getTime.minutes;
    timerSeconds.textContent = getTime.seconds;

    if (getTime.timeRemaning > 0) setTimeout(updateClock, 1000);
  };
  updateClock();
};

export default one;
