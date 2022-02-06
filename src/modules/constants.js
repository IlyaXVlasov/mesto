const validationSetting = {
  formSelector: "form",
  inputSelector: ".popup__line",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_disabled",
  inputErrorClass: "popup__line_type_error",
  errorClass: "popup__line-error_active",
};
const exitPopup = document.querySelectorAll(".popup__exit"); // крестик модального окна
const popups = document.querySelectorAll(".popup"); // модальное окно
const formProfile = document.querySelector("#formprofile"); // форма профиля
const jobInput = formProfile.querySelector("#eco"); // импут ввода деятельности
const nameInput = formProfile.querySelector("#researcher"); // импут ввода имени
const profileName = document.querySelector(".profile__title"); // имя  профиля
const profileDesc = document.querySelector(".profile__subtitle"); // деятельность профиля
const formCard = document.querySelector("#formcard"); // форма карточек
const inputName = formCard.querySelector("#namecard"); // инпут имя карточки
const inputlink = formCard.querySelector("#linkcard"); // инпут ссылка
const listCard = document.querySelector(".card"); // список
const popupCard = document.querySelector(".popup_type_card"); // модальное окно с карточками //
const popupPhoto = document.querySelector(".popup_type_photo"); // модальное окно с фото
const popupProfile = document.querySelector(".popup_type_profile"); //модальное окно
const popupAvatar = document.querySelector(".popup_type_avatar"); // модальное окно аватар
const profileAvatar = document.querySelector(".profile__avatar");
const formAvatar = document.querySelector("#formavatar"); // форма аватара
const inputAvatar = formAvatar.querySelector("#linkavatar"); // импут аватара

const penEditorButton = document.querySelector(".profile__pen-editor"); // кнопка на аватаре
const editButton = document.querySelector(".profile__edit"); //кнопка карандаш//
const profileInput = formProfile.querySelector(".popup__line"); // инпут профиля
const plusButton = document.querySelector(".profile__plus"); // кнопка плюс //
const cardName = document.querySelector(".card__title"); // имя карточки //
const photoCard = document.querySelector(".card__photo-card"); // фото карточки //
const nameImages = document.querySelector(".popup__name-photo"); // название фото //
const imageLink = document.querySelector(".popup__images-photo"); // фото //
const submitAvatar = document.querySelector(".popup__save-button_type_avatar"); // кнопка субмита
const submitCard = document.querySelector(".popup__save-button_type_card");
const submitProfile = document.querySelector(
  ".popup__save-button_type_profile"
);

export {
  validationSetting,
  popups,
  exitPopup,
  penEditorButton,
  popupAvatar,
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
  inputName,
  inputlink,
  profileDesc,
  profileName,
  formProfile,
  jobInput,
  nameInput,
  profileAvatar,
  formAvatar,
  inputAvatar,
  submitAvatar,
  submitCard,
  submitProfile,
};
