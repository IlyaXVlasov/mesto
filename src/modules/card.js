import { popupImages } from "./modal.js";
import { userId } from "../index.js";
import { settingLike, removingLike, deleteCard } from "./api.js";

const createCard = (name, link, likes, cardId, ownerId) => {
  // клонируем содержимое тега template
  const cardTemplate = document.querySelector("#tempcard").content;
  const elementItem = cardTemplate.querySelector(".card__item").cloneNode(true);
  const deleteElement = elementItem.querySelector(".card__delete");
  const likeElement = elementItem.querySelector(".card__heart"); //сердце
  const likeQuantity = elementItem.querySelector(".card__quantity"); //число

  likeQuantity.textContent = likes.length; // длинна массива

  const isLiked = Boolean(
    likes.find((user) => {
      return user._id === userId;
    })
  ); // выполняем поиск id нашего лайка
  if (isLiked) {
    likeElement.classList.add("card__heart_active");
  }

  const isOwner = ownerId === userId;
  if (isOwner) {
    deleteElement.classList.add("card__delete_visible");
  } else {
    deleteElement.classList.add("card__delete_hidden");
  }

  elementItem.querySelector(".card__photo-card").setAttribute("src", link);
  elementItem.querySelector(".card__photo-card").setAttribute("alt", name);
  elementItem.querySelector(".card__title").textContent = name;

  likeElement.addEventListener(
    "click",
    () => likeHeartCard(likeElement, cardId, likeQuantity) // сердце
  );
  // мусорка
  deleteElement.addEventListener("click", () =>
    removeCard(deleteElement, cardId)
  );

  elementItem
    .querySelector(".card__photo-card")
    .addEventListener("click", () => popupImages(link, name)); // попап фото
  return elementItem;
};

// функция постановки и удаления лайка //
const likeHeartCard = (el, cardId, likeQuantity) => {
  if (!el.classList.contains("card__heart_active")) {
    settingLike(cardId)
      .then((card) => {
        el.classList.add("card__heart_active");
        likeQuantity.textContent = card.likes.length.toString();
      })
      .catch((err) => {
        console.log("Ошибка. Лайк не поставлен: ", err);
      });
  } else {
    removingLike(cardId)
      .then((card) => {
        likeQuantity.textContent = card.likes.length.toString();
        el.classList.remove("card__heart_active");
      })
      .catch((err) => {
        console.log("Ошибка. Лайк не удален: ", err);
      });
  }
};
// удаление карточки
const removeCard = (el, cardId) => {
  if (!el.classList.contains("card__item")) {
    deleteCard(cardId)
      .then(() => {
        el.closest(".card__item").remove();
      })
      .catch((err) => {
        console.log("Ошибка. Карточка не удалена: ", err);
      });
  }
};

// добавление карточек
const addCard = (listCard, elementItem, prepend) => {
  if (prepend) {
    listCard.prepend(elementItem);
  } else {
    listCard.append(elementItem);
  }
};
export { createCard, addCard };
