const formProfile = document.querySelector("#formprofile"); // форма профиля
const profileName = document.querySelector(".profile__title"); // имя  профиля
const profileDesc = document.querySelector(".profile__subtitle"); // деятельность профиля
const formCard = document.querySelector("#formcard"); // форма карточек //
const listCard = document.querySelector(".card"); // список //
const popupCard = document.querySelector(".popup_type_card"); // модальное окно с карточками //
const popupPhoto = document.querySelector(".popup_type_photo"); // модальное окно с фото
const popupProfile = document.querySelector(".popup_type_profile"); //модальное окно

const editButton = document.querySelector(".profile__edit"); //кнопка карандаш//
const profileInput = formProfile.querySelector(".popup__line"); // инпут профиля
const plusButton = document.querySelector(".profile__plus"); // кнопка плюс //
const cardName = document.querySelector(".card__title"); // имя карточки //
const photoCard = document.querySelector(".card__photo-card"); // фото карточки //
const nameImages = document.querySelector(".popup__name-photo"); // название фото //
const imageLink = document.querySelector(".popup__images-photo"); // фото //

export const validationSetting = {
  formSelector: "form",
  inputSelector: ".popup__line",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_disabled",
  inputErrorClass: "popup__line_type_error",
  errorClass: "popup__line-error_active",
};
export {
  imageLink,
  nameImages,
  photoCard,
  cardName,
  plusButton,
  profileInput,
  editButton,
  popupProfile,
  popupPhoto,
  popupCard,
  listCard,
  formCard,
  profileDesc,
  profileName,
  formProfile,
};
