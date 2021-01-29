$(function () {
  $('#datetimepicker1').datetimepicker({
    locale: 'ru',
    stepping: 10,
    format: 'DD.MM.YYYY',
    defaultDate: moment('01.01.2021').format('DD.MM.YYYY'),
    daysOfWeekDisabled: [0, 6],
  });
  $('#datetimepicker2').datetimepicker({
    locale: 'ru',
  });
});
