import { validationSetting } from "./constants.js";
// добавляем ошибку
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(
    `.popup__line_type_${inputElement.id}`
  );
  inputElement.classList.add(validationSetting.inputErrorClass);
  console.log(validationSetting.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validationSetting.errorClass);
};
// удаляем ошибку
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(
    `.popup__line_type_${inputElement.id}`
  );

  inputElement.classList.remove(validationSetting.inputErrorClass);
  errorElement.classList.remove(validationSetting.errorClass);
  errorElement.textContent = "";
};

// проверяем валидность поля
export const checkIsValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

// функция переключения валидации формы кнопки
const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(validationSetting.inactiveButtonClass);
    buttonElement.setAttribute("disabled", true);
  } else {
    buttonElement.classList.remove(validationSetting.inactiveButtonClass);
    buttonElement.removeAttribute("disabled");
  }
};

// проверяем валидность инпутов
export const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

// добавляем обработчиков всем импутам формы
export const setEventListeners = (formElement) => {
  const inputList = Array.from(
    formElement.querySelectorAll(validationSetting.inputSelector)
  );
  const buttonElement = formElement.querySelector(
    validationSetting.submitButtonSelector
  );

  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkIsValid(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

// добавления обработчиков всем формам
export const enableValidation = (validationSetting) => {
  const formList = Array.from(
    document.querySelectorAll(validationSetting.formSelector)
  );

  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
};
enableValidation(validationSetting);
