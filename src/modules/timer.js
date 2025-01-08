const timer = (deadline) => {
  const timerHourse = document.querySelector("#timer-hours");
  const timerMinutes = document.querySelector("#timer-minutes");
  const timerSeconds = document.querySelector("#timer-seconds");
  let idInterval;

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

    if (getTime.timeRemaning > 0) {
      timerHourse.textContent = getTime.hours.toString().padStart(2, "0");
      timerMinutes.textContent = getTime.minutes.toString().padStart(2, "0");
      timerSeconds.textContent = getTime.seconds.toString().padStart(2, "0");
    } else {
      console.log("Остановите");
      clearInterval(idInterval);
    }
  };
  idInterval = setInterval(updateClock, 1000);
};

export default timer;
