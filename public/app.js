const isCheckboxOrRadio = (type) => ['checkbox', 'radio'].includes(type); // при проверке 'checkbox', 'radio' возвращает true, во всех остальных случаях false

const { form } = document.forms;

function retrieveFormValue(event) {
  event.preventDefault();

  const { elements } = form; // получаю элементы из формы
  const values = {}; // аккумулирую значения полей

  for (let i = 0; i < elements.length; i++) {
    const formElement = elements[i];
    const { name } = formElement; // проверяю наличие атрибута name
    if (name) {
      const { value, type, checked } = formElement; // если поле name есть то достаю значение
      values[name] = isCheckboxOrRadio(type) ? checked : value;
    }
  }
  console.log(values);
}

form.addEventListener('submit', retrieveFormValue);
