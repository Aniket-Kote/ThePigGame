"sue strict";

const modal = document.querySelector(".modal");
const close_modal = document.querySelector(".close_modal");
const overlay = document.querySelector(".overlay");
const rulesBtn = document.querySelector(".rules_btn");

const openmodal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closemodal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};


rulesBtn.addEventListener("click", openmodal);


close_modal.addEventListener("click", closemodal);

// overlay.addEventListener("click", closemodal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closemodal();
  }
});
