const form = document.querySelector('form');

function retrieveFormValue(event) {
  event.preventDefault();

  const q1 = form.querySelector('[name="Q-1"]');
  const q2 = form.querySelector('[name="Q-2"]');
  const t1 = form.querySelector('[name="Т-1"]');
  const t2 = form.querySelector('[name="Т-2"]');
  const v1 = form.querySelector('[name="V-1"]');
  const v2 = form.querySelector('[name="V-2"]');
  const m1 = form.querySelector('[name="M-1"]');
  const m2 = form.querySelector('[name="M-2"]');
  const work_device = form.querySelector('[name="work_device"]');
  const work_device_error = form.querySelector('[name="work_device_error"]');
  const exampleFormControlTextarea1 = form.querySelector(
    '[ name="exampleFormControlTextarea1"]'
  );

  const values = {
    q1: q1.value,
    q2: q2.value,
    t1: t1.value,
    t2: t2.value,
    v1: v1.value,
    v2: v2.value,
    m1: m1.value,
    m2: m2.value,
    work_device: work_device.value,
    work_device_error: work_device_error.value,
    exampleFormControlTextarea1: exampleFormControlTextarea1.value,
  };
  console.log('value', values);
}

form.addEventListener('submit', retrieveFormValue);
