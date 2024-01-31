# Todo-Kata React + TS

##### Cписок дел c возможностью форматировать и фильтровать задачи выполненный на React без API и сохранение задач в store.

---

<img width="1162" alt="image" src="https://github.com/Binatik/images/assets/47430210/3f9862b8-b6a5-494c-8207-2c8bea677ee0">

## Проверить

Проверить последнюю версию web приложения Production [здесь](https://react-todo-binatik.vercel.app).
###### ``Создание задачи при нажатии на Enter в первом поле где 
``What needs to be done?``

## Запуск для разработчиков

Для запуска у вас должен быть установлен [Node.js](http://nodejs.org)
Для установки пакетов используется [npm](https://www.npmjs.com)

```bash
npm install -g npm
```

```bash
$ git clone repository # Клонирование репозитория
$ npm i # Установка зависимостей
$ npm dev # Запуск в dev  режиме
```

```js
//scripts vite
"dev": "vite",
"build": "tsc && vite build",
"lint": "eslint ./src",
"lint:fix": "eslint ./src --fix",
"format": "prettier ./src --write",
"preview": "vite preview"
```

## Возможности:

- Cоздать задачу с таймером
- Изменить задачу
- Пометить задачу активной/выполненной
- Удалить задачу
- Фильтровать задачи
- Удалять выполненные задачи
- Запускать/останавливать таймер

## Оптимизации

Блокировка отправки пустой строки
Обновление form control

`Поддержка Ege, Chrome, Yandex последних версий`
