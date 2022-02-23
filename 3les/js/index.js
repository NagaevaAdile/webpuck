import "../style/styles.scss";
import cards from "./cards";

const row = document.querySelector(".row");

cards.forEach((el, i) => {
  if (i === 0) {
    row.innerHTML += `
                    <div class="column">
                        <audio src=${el.src} controls></audio>
                        <p>${el.title}</p>
                    </div>
                        `;
  } else if (i === 1) {
    row.innerHTML += `
                    <div class="column">
                        <video src=${el.src} controls></video>
                        <p>${el.title}</p>
                    </div>
                        `;
  } else {
    row.innerHTML += `
    <div class="column">
        <img src=${el.src} alt="alt">
        <p>${el.title}</p>
    </div>
        `;
  }
});
