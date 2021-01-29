# Создание модели.

В корне создаю папку models и файл form.js

В этом файле мы будем так же создавать модель использую sequelize. Мне потребуется две переменные.

```js
//models/form.js
const Sequelize = require('sequelize');
const sequelize = require('../utils/database');
```

После необходимо создать модель для form.

```js
//models/form.js
const Sequelize = require('sequelize');
const sequelize = require('../utils/database');


const form = ...

module.exports = form;
```

В константе form обращаюсь к sequelize, который относится именно к нашему подключению, и вызываем у него метод define(). Первым параметром мы в строковом значении указываем название модели которой мы хотим задать, например 'Form'. Вторым параметром передаю объект опций которые будут использоваться. И теперь необходимо описать поля использую sql.
