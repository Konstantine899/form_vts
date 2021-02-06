const { form } = document.forms;

async function retrieveFormValue(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const values = Object.fromEntries(formData.entries());
  console.log(values);

  const formValueToJson = await fetch('/form', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(values),
  });
  // console.log(values);
  let result = await formValueToJson.json();
  console.log(result);
}

document
  .querySelector('.sendButton')
  .addEventListener('click', retrieveFormValue);

// form.addEventListener('.sendButton');
