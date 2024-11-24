
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const datetimePicker = document.querySelector("#datetime-picker");
const startButton = document.querySelector("[data-start]");
const daysEl = document.querySelector("[data-days]");
const hoursEl = document.querySelector("[data-hours]");
const minutesEl = document.querySelector("[data-minutes]");
const secondsEl = document.querySelector("[data-seconds]");

let userSelectedDate = null;
let timerInterval = null;


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      const selectetDate = selectedDates[0];
      const now = new Date();

      if (selectetDate <= now) {
          iziToast.error({ message: "Please choose a date in the future" });
          startButton.disabled = true;
      } else {
          userSelectedDate = selectetDate;
          startButton.disabled = false;

      }


  },
};

flatpickr('#datetime-picker', options);

function convertMs(ms) {

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;


  const days = Math.floor(ms / day);

  const hours = Math.floor((ms % day) / hour);

  const minutes = Math.floor(((ms % day) % hour) / minute);

  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addZeros(value) {
    return String(value).padStart(2, "0");
}

function updateTimer({ days, hours, minutes, seconds }) {
    daysEl.textContent = addZeros(days);
    hoursEl.textContent = addZeros(hours);
    minutesEl.textContent = addZeros(minutes);
    secondsEl.textContent = addZeros(seconds);

}

function startTimer() {
    const now = new Date();

    startButton.disabled = true;
    datetimePicker.disabled = true;

    timerInterval = setInterval(() => {
        const currentTime = new Date();
        const timeDiference = userSelectedDate - currentTime;

        if (timeDiference <= 0) {
            clearInterval(timerInterval);
            updateTimer({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            datetimePicker.disabled = false;
            iziToast.success({title: "Success", message: "Countdown completed!"});
            return;
        }

        const timeLeft = convertMs(timeDiference);
        updateTimer(timeLeft);
    }, 1000);
}

startButton.addEventListener("click", startTimer);



