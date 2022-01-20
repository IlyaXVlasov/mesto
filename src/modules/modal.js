import {
  popupProfile,
  popupPhoto,
  popupCard,
  listCard,
  formCard,
  profileDesc,
  profileName,
  formProfile,
} from "./constants.js";

import { createCard, addCard } from "./card.js";

// добавляем модификаторы
const openPopup = (popup) => {
  popup.classList.add("popup_opened");
};
// удаляем модификаторы
const closePopup = (popup) => {
  popup.classList.remove("popup_opened");
};
// функция закрытия всех попапов по кнопке крестик
const clickExit = (evt) => {
  closePopup(evt.target.closest(".popup"));
};

//закрытие по клику на оверлей
document.addEventListener("click", (evt) => {
  const closeClick = document.querySelector(".popup");
  if (
    closeClick &&
    evt.target !== closeClick.classList.contains(".popup_opened")
  ) {
    closePopup(evt.target);
  }
});

//   закрытие попапа на клавишу Esc
const keyHandler = (evt) => {
  if (evt.key === "Escape") {
    closePopup(popupPhoto);
    closePopup(popupCard);
    closePopup(popupProfile);
  }
};
const formSubmitHandler = (evt) => {
  evt.preventDefault(); //блокирует отправку //
  const jobInput = formProfile.querySelector("#eco"); // строка ввода деятельности //
  const nameInput = formProfile.querySelector("#researcher"); // строка ввода имени //

  profileName.textContent = nameInput.value; //  запись с 1 ого инпута //
  profileDesc.textContent = jobInput.value; // запись с 2 ого инпута //
  closePopup(popupProfile);
};

const cardSubmitHandler = (evt) => {
  evt.preventDefault(); //блокирует отправку //

  const name = formCard.querySelector("#namecard").value;
  const link = formCard.querySelector("#linkcard").value;

  addCard(listCard, createCard(name, link));
  formCard.reset();
  closePopup(popupCard);
};
// откроет попап с фото
const popupImages = (link, name) => {
  openPopup(popupPhoto);
  document.querySelector(".popup__name-photo").textContent = name;
  document.querySelector(".popup__images-photo").setAttribute("src", link);
  document.querySelector(".popup__images-photo").setAttribute("alt", name);
};

export {
  openPopup,
  closePopup,
  clickExit,
  formSubmitHandler,
  cardSubmitHandler,
  popupImages,
  keyHandler,
};
