import { printResult } from "./printData.js";
import getDataDiff from "./getDataDiff.js";

const btnDate = document.querySelector(".date");
const btnTimer = document.querySelector(".timer");
const content = document.querySelector(".content");

export const calculationPage = () => {
  btnDate.addEventListener("click", (e) => {
    content.innerHTML = "";
    e.preventDefault();
    content.innerHTML = `<form id="datecalc">
                                  <h3>Калькулятор дат</h3>
                                  <label>
                                      <strong>Первая дата:</strong>
                                      <input type="date" name="firstDate" />
                                  </label>
                                  <label>
                                      <strong>Вторая дата:</strong>
                                      <input type="date" name="secondDate" />
                                  </label>
                                  <button type="submit">Расчитать промежуток</button>
                                  <p id="datecalc__result"></p>
                              </form>`;

    const form = document.getElementById("datecalc");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      console.log(form);

      const formData = new FormData(event.target);

      const firstDate = formData.get("firstDate");
      const secondDate = formData.get("secondDate");

      if (!firstDate || !secondDate) {
        printResult("Oooopppsss -> введите даты");
      } else {
        const diff = getDataDiff(firstDate, secondDate);
        const { years, months, days } = diff;
        printResult(`Год - ${years}, Месяц - ${months}, День - ${days}`);
      }
    });
  });
};
