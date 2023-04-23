export const

countSteps = Array.from(
  document.querySelectorAll('.study__text_type_step')
),

selects = Array.from(
  document.querySelectorAll('.study__select')
),

selectOption = Array.from(
  document.querySelectorAll('.study__option')
),

radioValue = Array.from(
  document.querySelectorAll('.study__label > .study__radio')
),

radioTexts = Array.from(
  document.querySelectorAll('.study__label > .study__name')
),

inputs = Array.from(
  document.querySelectorAll('.study__name_type_input')
),

btnLast = Array.from(
  document.querySelectorAll('.study__button_type_last')
),

submitForms = Array.from(
  document.querySelectorAll('form.study__block')
),

contentBlocks = document.querySelector('.study__blocks'),

translate = { count: 0 },
dataForm = {};
