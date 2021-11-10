// переменные к профилю //
const editButton = document.querySelector(".profile__edit"); //кнопка карандаш//
const popup = document.querySelector(".popup"); //модальное окно//
const exitButton = document.querySelector(".popup__exit"); //кнопка крестик//
const profileName = document.querySelector(".profile__title"); // имя  профиля //
const formProfile = document.getElementById("formprofile"); // форма профиля //
const profileDesc = document.querySelector(".profile__subtitle"); // деятельность профиля //
// переменные к карточкам //
const plusButton = document.querySelector(".profile__plus"); // кнопка плюс //
const popupCard = document.querySelector(".popup-card"); // модальное окно с карточками //
const exitButtonCard = document.querySelector(".popup-card__exit"); // кнопка закрыть попап //
const formCard = document.getElementById("formcard"); // форма карточек //
const CardName = document.querySelector(".card__title"); // имя карточки //
const photoCard = document.querySelector(".card__photo-card"); // фото карточки //
const listCard = document.querySelector(".card"); // список //

//cобытие клик по кнопке и анонимная функция//
editButton.addEventListener("click", function () {
  popup.classList.add("popup_type_profile"); //добавляем модификатор//
  console.log("Нажал(а) на кнопку редактировать профиль");
});

exitButton.addEventListener("click", function () {
  popup.classList.remove("popup_type_profile"); //удаляем модификатор//
  console.log("Нажал(а) на кнопку закрыть");
});

function formSubmitHandler(evt) {
  evt.preventDefault(); //блокирует отправку //
  const jobInput = document.getElementById("eco"); // строка ввода деятельности //
  const nameInput = document.getElementById("researcher"); // строка ввода имени //

  profileName.textContent = nameInput.value; //  запись с 1 ого инпута //
  console.log(nameInput);
  profileDesc.textContent = jobInput.value; // запись с 2 ого инпута //
  console.log(jobInput);
  popup.classList.remove("popup_type_profile");
}
// нажал на форму + вызвал отправку + вызвал функцию //
formProfile.addEventListener("submit", formSubmitHandler);

plusButton.addEventListener("click", function () {
  popupCard.classList.add("popup_type_card");
  console.log("Нажал(а) на кнопку добавить карточку");
});

exitButtonCard.addEventListener("click", function () {
  popupCard.classList.remove("popup_type_card");
  console.log("Нажал(а) на кнопку закрыть");
});

function CardSubmitHandler(evt) {
  evt.preventDefault(); //блокирует отправку //

  const inputCardLink = document.getElementById("linkcard").value;
  const inputCardName = document.getElementById("namecard").value;

  CreateCard(inputCardName, inputCardLink);
  popupCard.classList.remove("popup_type_card");
}
// нажал на форму + вызвал отправку + вызвал функцию //
formCard.addEventListener("submit", CardSubmitHandler);

function CreateCard(name, link) {
  // Создаем клон карточки //
  const CardTemplate = document.querySelector("#tempcard").content;
  const ElementItem = CardTemplate.querySelector(".card__item").cloneNode(true);
  // Функция удаления карточек //
  ElementItem.querySelector(".card__delete").addEventListener(
    "click",
    function (evt) {
      const ElementItem = evt.target.closest(".card__item");
      ElementItem.remove();
    }
  );

  ElementItem.querySelector(".card__photo-card").setAttribute("src", link);
  ElementItem.querySelector(".card__photo-card").setAttribute("alt", name);
  ElementItem.querySelector(".card__title").textContent = name;

  ElementItem.querySelector(".card__heart").addEventListener(
    "click",
    function (evt) {
      evt.target.classList.toggle("card__heart_active");
      console.log(evt.target);
    }
  );

  listCard.prepend(ElementItem);
}

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
