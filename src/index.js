import "./index.css"; // добавьте импорт главного файла стилей
import { getAppInfo } from "./modules/api.js";
import {
  validationSetting,
  plusButton,
  editButton,
  popupProfile,
  popupCard,
  formCard,
  formProfile,
  penEditorButton,
  popupAvatar,
  profileAvatar,
  profileName,
  profileDesc,
  formAvatar,
  listCard,
  exitPopup,
  popups,
} from "./modules/constants.js";
import {
  openPopup,
  clickExit,
  submitHandlerCard,
  submitHandlerProfile,
  submitHandlerAvatar,
  clickOverlayClose,
} from "./modules/modal.js";
import { createCard, addCard } from "./modules/card.js";
import { enableValidation } from "./modules/validate.js";
export let userId = "";
getAppInfo()
  .then(([user, cards]) => {
    userId = user._id;
    profileName.textContent = user.name;
    profileDesc.textContent = user.about;
    profileAvatar.src = user.avatar;
    cards.forEach((element) =>
      addCard(
        listCard,
        createCard(
          element.name,
          element.link,
          element.likes,
          element._id,
          element.owner._id
        )
      )
    );
  })
  .catch((err) => {
    console.log("Ошибка. Запрос не выполнен: ", err);
  });

editButton.addEventListener("click", () => {
  formProfile.querySelector("#eco").value = profileDesc.textContent; // сохраняем данные пользователя
  formProfile.querySelector("#researcher").value = profileName.textContent;
  openPopup(popupProfile); //вызываем родителя присваиваем класс//
});

plusButton.addEventListener("click", () => {
  // открыть попап добавить карточку //
  openPopup(popupCard);
});

penEditorButton.addEventListener("click", () => {
  openPopup(popupAvatar);
});

// коллекция кнопок закрытие на крестик
exitPopup.forEach((element) => {
  element.addEventListener("click", clickExit);
});
// коллекция кнопок закрытие оверлея
popups.forEach((element) => {
  element.addEventListener("click", clickOverlayClose);
});

// нажал на форму + вызвал отправку + вызвал функцию //
formProfile.addEventListener("submit", submitHandlerProfile);

formAvatar.addEventListener("submit", submitHandlerAvatar);

// нажал на форму + вызвал отправку + вызвал функцию //
formCard.addEventListener("submit", submitHandlerCard);
// вызов функции валидации обьект
enableValidation(validationSetting);
