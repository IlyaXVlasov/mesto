import {
  popupProfile,
  popupPhoto,
  popupCard,
  listCard,
  formCard,
  inputName,
  inputlink,
  profileDesc,
  profileName,
  jobInput,
  nameInput,
  popupAvatar,
  formAvatar,
  profileAvatar,
  inputAvatar,
  imageLink,
  nameImages,
  submitAvatar,
  submitCard,
  submitProfile,
  popups,
} from "./constants.js";
import { addCard, createCard } from "./card.js";
import { editorProPatch, avatarProf, postNewCard } from "./api.js";

// закрытие попапа на клавишу Esc
const handlerKey = (evt) => {
  if (evt.key === "Escape") {
    closePopup(document.querySelector(".popup_opened"));
  }
};

// удаляем модификаторы
const closePopup = (popup) => {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keyup", handlerKey);
};

// добавляем модификаторы
const openPopup = (popup) => {
  popup.classList.add("popup_opened");
  document.addEventListener("keyup", handlerKey);
};

// функция закрытия всех попапов по кнопке крестик
const clickExit = (evt) => {
  closePopup(evt.target.closest(".popup"));
};

//закрытие по клику на оверлей
const clickOverlayClose = (evt) => {
  evt.target.classList.contains(".popup_opened");
  closePopup(evt.target);
};

const submitHandlerAvatar = (evt) => {
  evt.preventDefault();
  submitAvatar.textContent = "Сохранение...";
  avatarProf(inputAvatar.value)
    .then((user) => {
      profileAvatar.src = user.avatar;
      formAvatar.reset();
      submitAvatar.classList.add("popup__save-button_disabled");
      submitAvatar.setAttribute("disabled", true);
      closePopup(popupAvatar);
    })
    .catch((err) => {
      console.log("Ошибка. Аватар не добавлен", err);
    })
    .finally(() => {
      submitAvatar.textContent = "Сохранить";
    });
};
const submitHandlerProfile = (evt) => {
  evt.preventDefault(); //блокирует отправку //
  submitProfile.textContent = "Сохранение...";
  editorProPatch(nameInput.value, jobInput.value)
    .then((user) => {
      profileName.textContent = user.name; //  запись с 1 ого инпута
      profileDesc.textContent = user.about; // запись с 2 ого инпута
      submitProfile.classList.add("popup__save-button_disabled");
      submitProfile.setAttribute("disabled", true);
      closePopup(popupProfile);
    })
    .catch((err) => {
      console.log("Ошибка. Профиль не изменен", err);
    })
    .finally(() => {
      submitProfile.textContent = "Сохранить";
    });
};

const submitHandlerCard = (evt) => {
  evt.preventDefault(); //блокирует отправку //
  submitCard.textContent = "Создание...";
  postNewCard(inputName.value, inputlink.value)
    .then((card) => {
      addCard(
        listCard,
        createCard(card.name, card.link, card.likes, card._id, card.owner._id),
        true
      );
      formCard.reset();
      submitCard.classList.add("popup__save-button_disabled");
      submitCard.setAttribute("disabled", true);
      closePopup(popupCard);
    })
    .catch((err) => {
      console.log("Ошибка. Карточка не добавлена: ", err);
    })
    .finally(() => {
      submitCard.textContent = "Создать";
    });
};
// откроет попап с фото
const popupImages = (link, name) => {
  openPopup(popupPhoto);
  nameImages.textContent = name;
  imageLink.setAttribute("src", link);
  imageLink.setAttribute("alt", name);
};

export {
  openPopup,
  closePopup,
  clickExit,
  submitHandlerProfile,
  submitHandlerCard,
  popupImages,
  submitHandlerAvatar,
  clickOverlayClose,
};
