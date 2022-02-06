const config = {
  baseUrl: "https://nomoreparties.co/v1/plus-cohort-6",
  headers: {
    authorization: "6847b814-a8ab-4a85-8179-5220840bc7d3",
    "Content-Type": "application/json",
  },
};

const getResponseData = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

const getUser = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: "GET",
    headers: config.headers,
  }).then((response) => getResponseData(response));
};

const getCard = () => {
  return fetch(`${config.baseUrl}/cards`, {
    method: "GET",
    headers: config.headers,
  }).then((response) => getResponseData(response));
};

const getAppInfo = () => {
  return Promise.all([getUser(), getCard()]);
};
// добавление новой карточки
const postNewCard = (name, link) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      link: link,
    }),
  }).then((response) => getResponseData(response));
};

const editorProPatch = (name, about) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      about: about,
    }),
  }).then((response) => getResponseData(response));
};

const avatarProf = (avatar) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      avatar: avatar,
    }),
  }).then((response) => getResponseData(response));
};

const deleteCard = (cardId) => {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then((response) => getResponseData(response));
};
// постановка лайка
const settingLike = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: "PUT",
    headers: config.headers,
  }).then((response) => getResponseData(response));
};
// снятие лайка
const removingLike = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then((response) => getResponseData(response));
};
export {
  avatarProf,
  getAppInfo,
  editorProPatch,
  postNewCard,
  deleteCard,
  settingLike,
  removingLike,
};
