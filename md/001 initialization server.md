# Инициализация сервера

Как обычно инициализирую проект

```shell
npm init -y
```

Далее устанавливаю

```shell
npm install express
```

Документация по express [https://expressjs.com/ru/](https://expressjs.com/ru/)

Далее мне понадобится **nodemon**

```shell
npm install nodemon -D
```

**-D** - сохраняет в список зависимостей для разработки. [https://www.npmjs.com/package/nodemon](https://www.npmjs.com/package/nodemon).

Далее в **package.json** прописываю команды для запуска.

```json
{
  "name": "node-mysql",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.16.4"
  },
  "devDependencies": {
    "nodemon": "^1.19.0"
  }
}
```

Входной точкой в приложение является **index.js** поэтому создаю его в корне.

И здесь нужно запустить весь сервер.

Для этого подключаю **express**. После чего создаю объект app которая присваевает вызов функции **express**.

```js
const express = require('express');
const app = express();
```

Далее создаю переменную PORT.

```js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
```

После чего указываю приложения что бы слушал порт.

```js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT);
```

теперь давайте посмотрим на то, что у нас есть в приложении и как нам с этим работать. Потому что пока что у меня есть в папке public едиственный **html** файл который должени быть по сути должен быть едиственной страницей в нашем приложении т.е. все наше приложении состоит из данного файла и весь контент у нас либо динамически либо генерируется, либо меняется средствами какого-нибуть **framework** или библиотекой. Т.е. по сути теперь нам не нужно задавать большое количество роутов. Делать большое количество **get** запросов. Нам нужно по сути на запрос отдавать один и тот же файл.

Для этого папку **public** нужно сделать статической для того что бы **express** понимал где мы берем разную статику. Для этого я обращаюсь к **app** и с помощью его метода **use()** передаю сюда **middleware** т.е. обращаюсь к **express.static()** где указываю имя папки. Но для того что бы роуты работали я должен подключить модуль **path**. После чего в **express.static()** указываю **path.join(\_\_dirname, 'public')**

```js
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT);
```

Теперь, перед тем как мы начинаем слушать сервер, нам необходимо добавить новый **middleware** т.е. с помощью **app.use()**, и сюда мы можем добавить свой собственный **middleware** т.е. это **callback** функция которая принимает в себя три параметра, **req**, **res**, **next**. Данный **middleware** будет идти всегда перед тем как запустить наш сервер. Остальную разработку я буду вести чуть выше. И здесь на каждый запрос необходимо возвращать один файл. Для этого я обращаюсь к объекту **res** и вызываю у него метод **sendFile()** и сюда мы просто передаем название данного файла.

```js
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  res.sendFile('/index.html');
});


    app.listen(PORT);

}

start();
```

Проверка

```shell
npm run dev
```

Далее нужно подумать как обрабатывать определенные запросы на сервер через **REST** **API**.
