let button = document.querySelector('.sendButton');

button.addEventListener('click', () => {
  const eventClickButtonForm = document.body
    .querySelectorAll('input')
    .forEach((input) => {
      let b = `${input.getAttribute('id')} = ${input.value}`;
      console.log(b);
    });
  // return console.log(eventClickButtonForm);
});
