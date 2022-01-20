import "./index.css"; // добавьте импорт главного файла стилей
import {
  validationSetting,
  plusButton,
  editButton,
  popupProfile,
  popupCard,
  formCard,
  formProfile,
} from "./modules/constants.js";
import {
  keyHandler,
  openPopup,
  clickExit,
  formSubmitHandler,
  cardSubmitHandler,
} from "./modules/modal.js";

import { enableValidation } from "./modules/validate.js";
editButton.addEventListener("click", () => {
  formProfile.querySelector("#eco").value; // сохраняем данные пользователя
  formProfile.querySelector("#researcher").value;
  openPopup(popupProfile); //вызываем родителя присваиваем класс//
});

plusButton.addEventListener("click", () => {
  // открыть попап добавить карточку //
  openPopup(popupCard);
});

// коллекция кнопок с обработчиком
Array.from(document.querySelectorAll(".popup__exit")).forEach((element) => {
  element.addEventListener("click", clickExit);
});

// слушатель Esc  на 3 окна модальных окна
document.addEventListener("keydown", keyHandler);
document.addEventListener("keydown", keyHandler);
document.addEventListener("keydown", keyHandler);

// нажал на форму + вызвал отправку + вызвал функцию //
formProfile.addEventListener("submit", formSubmitHandler);

// нажал на форму + вызвал отправку + вызвал функцию //
formCard.addEventListener("submit", cardSubmitHandler);
// вызов функции валидации обьект
enableValidation(validationSetting);
