// переменные к профилю //
const editButton = document.querySelector(".profile__edit"); //кнопка карандаш//
const popupProfile = document.querySelector(".popup_type_profile"); //модальное окно//
const exitButton = document.querySelector(".popup__exit"); //кнопка крестик//
const profileName = document.querySelector(".profile__title"); // имя  профиля //
const formProfile = document.getElementById("formprofile"); // форма профиля //
const profileDesc = document.querySelector(".profile__subtitle"); // деятельность профиля //
// переменные к карточкам //
const plusButton = document.querySelector(".profile__plus"); // кнопка плюс //
const popupCard = document.querySelector(".popup_type_card"); // модальное окно с карточками //
const exitButtonCard = document.querySelector(".popup-card__exit"); // кнопка закрыть попап //
const formCard = document.getElementById("formcard"); // форма карточек //
const cardName = document.querySelector(".card__title"); // имя карточки //
const photoCard = document.querySelector(".card__photo-card"); // фото карточки //
const listCard = document.querySelector(".card"); // список //

// переменные к фото //
const exitButtonPhoto = document.querySelector(".popup-photo__exit"); // кнопка закрыть //
const popupPhoto = document.querySelector(".popup_type_photo"); // модальное окно с фото //
const nameImages = document.querySelector(".popup-photo__name-photo"); // название фото //
const imageLink = document.querySelector(".popup-photo__images"); // фото //

// добавляем модификаторы
const openPopup = (pop) => {
  pop.classList.add("popup_opened");
};

editButton.addEventListener("click", () => {
  //cобытие клик по кнопке //
  openPopup(popupProfile); //вызываем родителя присваиваем класс//
});

plusButton.addEventListener("click", () => {
  // открыть попап добавить карточку //
  openPopup(popupCard);
});

// удаляем модификаторы
const closePopup = (pop) => {
  pop.classList.remove("popup_opened");
};
exitButton.addEventListener("click", () => {
  //  закрыть профиль
  closePopup(popupProfile);
});

exitButtonCard.addEventListener("click", () => {
  // закрыть попапа с карточками
  closePopup(popupCard);
});

exitButtonPhoto.addEventListener("click", () => {
  // закрыть попап с фото
  closePopup(popupPhoto);
});

const formSubmitHandler = (evt) => {
  evt.preventDefault(); //блокирует отправку //
  const jobInput = document.getElementById("eco"); // строка ввода деятельности //
  const nameInput = document.getElementById("researcher"); // строка ввода имени //

  profileName.textContent = nameInput.value; //  запись с 1 ого инпута //
  profileDesc.textContent = jobInput.value; // запись с 2 ого инпута //
  closePopup(popupProfile);
};
// нажал на форму + вызвал отправку + вызвал функцию //
formProfile.addEventListener("submit", formSubmitHandler);

const cardSubmitHandler = (evt) => {
  evt.preventDefault(); //блокирует отправку //

  const inputCardLink = document.getElementById("linkcard").value;
  const inputCardName = document.getElementById("namecard").value;

  addCard(listCard, createCard(inputCardName, inputCardLink));
  closePopup(popupCard);
};
// нажал на форму + вызвал отправку + вызвал функцию //
formCard.addEventListener("submit", cardSubmitHandler);

const createCard = (name, link) => {
  // клонируем содержимое тега template //
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
// откроет попап с фото
const popupImages = (link, name) => {
  openPopup(popupPhoto);
  document.querySelector(".popup-photo__name-photo").textContent = name;
  document.querySelector(".popup-photo__images").setAttribute("src", link);
  document.querySelector(".popup-photo__images").setAttribute("alt", name);
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
