import { popupImages } from "./modal.js";
import { listCard } from "./constants.js";

const createCard = (name, link) => {
  // клонируем содержимое тега template
  const cardTemplate = document.querySelector("#tempcard").content;
  const elementItem = cardTemplate.querySelector(".card__item").cloneNode(true);

  elementItem.querySelector(".card__photo-card").setAttribute("src", link);
  elementItem.querySelector(".card__photo-card").setAttribute("alt", name);
  elementItem.querySelector(".card__title").textContent = name;

  elementItem
    .querySelector(".card__heart")
    .addEventListener("click", likeHeartCard); // сердце

  elementItem
    .querySelector(".card__delete")
    .addEventListener("click", cardRemove); // мусорка

  elementItem
    .querySelector(".card__photo-card")
    .addEventListener("click", () => popupImages(link, name)); // попап фото
  return elementItem;
};

// функция переключатель сердец //
const likeHeartCard = (evt) => {
  evt.target.classList.toggle("card__heart_active");
};
// Функция удаления карточек //
const cardRemove = (evt) => {
  evt.target.closest(".card__item").remove();
};

// добавление карточек
const addCard = (listCard, elementItem) => {
  listCard.prepend(elementItem);
};
// массив карточек //
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

// функция перебора карточек //
initialCards.forEach((element) =>
  addCard(listCard, createCard(element.name, element.link))
);

export { createCard, likeHeartCard, cardRemove, addCard, initialCards };
