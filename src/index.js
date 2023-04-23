import './index.css';

import {
  btnLast,
  contentBlocks,
  countSteps,
  dataForm,
  inputs,
  radioTexts,
  radioValue,
  selectOption,
  selects,
  submitForms,
  translate
} from "./scripts/constants.js";

// Передаем текст в значение (для будущих запросов):
const toggleValue = (firstElement, lastElement, index) => {
  firstElement[index].value = lastElement[index].textContent;
} 

radioValue.forEach((_, idx) => {
  toggleValue(radioValue, radioTexts, idx);
});

selectOption.forEach((_, idx) => {
  toggleValue(selectOption, selectOption, idx);
});

// Количество шагов для всех карточек:
countSteps.forEach((step, idx) => {
  step.textContent = `Шаг ${idx + 1}/${countSteps.length}`;
});

// Анимация при нажатии кнопок:
const animateBlocks = count => {
  contentBlocks.style.transform = `
    translateX(-${count}%)`;
}

// Кнопка "Далее" и автоматический переход:
const discoveryNextForm = (form) => {
  translate.count += 100;
  animateBlocks(translate.count);
  // Добавление данных форм в объект:
  const forms = new FormData(form);
  forms.forEach((value, key) => {
    dataForm[key] = value;
  });
}

// Кнопка "Отмена":
btnLast.forEach(btn => {
  btn.addEventListener('click', () => {
    translate.count -= 100;
    animateBlocks(translate.count);
  });
});

// Проверка полей при различных событиях:
const hasInputs = event => {
  const form = event.target.closest('.study__block');
  const next = form.querySelector('.study__button_type_next');

  form.checkValidity()
    ? next.removeAttribute('disabled')
    : next.setAttribute('disabled', true);

  event.target.type === 'radio'
    && discoveryNextForm(form);
}

radioValue.forEach((radio) => {
  radio.addEventListener('change', hasInputs)
});

selects.forEach((select) => {
  select.addEventListener('click', hasInputs);
});

inputs.forEach((input) => {
  input.addEventListener('input', hasInputs);
});

// Отправка данных:
submitForms.forEach((form, index) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    discoveryNextForm(evt.target);

    submitForms.length-1 === index
      && console.log(dataForm);

    // Пример далее:

    // Далее делаем Fetch-запрос (или HTTP) вместо AJAX,
    // т.к AJAX это не чистый JS

    // fetch('url', {
    //   method: 'post',
    //   headers: {
    //     // Необходимый формат, допустим JSON
    //     'Content-Type': 'application/json'
    //   },
    //   // Отправляем данные:
    //   body: JSON.stringify(dataForm)
    // })
    //   .then(response => response.json())
    //   // Узнаем ответ от сервера
    //   .then(response => console.log(response))
    //   // В случае ошибки:
    //   .catch(error => console.error(error))
  });
});