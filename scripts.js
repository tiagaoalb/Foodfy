const modalOverlay = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal");
const cards = document.querySelectorAll(".card");

for (let card of cards) {
  card.addEventListener("click", function () {
    const cardImg = card.children[0].children[0].getAttribute("src");
    modal.querySelector("iframe").src = `${cardImg}`;
    const cardTitle = card.children[1].children[0].textContent;
    const cardAuthor = card.children[2].children[0].textContent;

    modal.querySelector(".modal-title h2").innerHTML = cardTitle;
    modal.querySelector(".modal-author p").innerHTML = cardAuthor;
    modalOverlay.classList.add("active");
  });
}

document.querySelector(".close-modal").addEventListener("click", function () {
  modalOverlay.classList.remove("active");
  // modalOverlay.querySelector("iframe").src = "";
});
