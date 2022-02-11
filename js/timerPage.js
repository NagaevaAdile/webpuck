import { printResult } from "./printData.js";
// import getDataDiff from "./getDataDiff.js";

const btnDate = document.querySelector(".date");
const btnTimer = document.querySelector(".timer");
const content = document.querySelector(".content");

export const timerPage = () => {
  btnTimer.addEventListener("click", (e) => {
    var sound = new Howl({
      src: ["sound1.mp3"],
    });

    content.innerHTML = "";
    e.preventDefault();
    content.innerHTML = `<h3>Таймер</h3>
                              <input class='value' type="number"/>
                              <button class="start">Старт</button>
                              <button class="stop">Стоп</button>
                              <p id="datecalc__result"></p> 
                              `;

    const btnStart = document.querySelector(".start");
    const btnStop = document.querySelector(".stop");
    const number = document.querySelector(".value");

    btnStart.addEventListener("click", () => {
      let num = number.value;

      const timer = setInterval(() => {
        printResult(`Таймер: ${num - 1}`);
        num--;

        if (num == 10 || (num < 5 && num > 0)) {
          sound.play();
        }

        if (num == 0) {
          clearInterval(timer);
          sound.pause();
        }
      }, 1000);

      btnStop.addEventListener("click", () => {
        number.value = `${num}`;
        clearInterval(timer);
      });
    });
  });
};
