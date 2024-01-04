# Todo-Kata React + TS

##### Cписок дел c возможностью форматировать и фильтровать задачи выполненный на React без API и сохранение задач в store.

---

<img width="1162" alt="image" src="https://github.com/Binatik/images/assets/47430210/c5db9199-701a-4993-b111-7d40e8fa315a">

## Проверить

Проверить последнюю версию web приложения можно [здесь](https://react-todo-kata.netlify.app/).

## Запуск

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

- Cоздать задачу
- Изменить задачу
- Пометить задачу активной
- Удалить задачу
- Фильтровать задачи
- Удалять выполненные задачи

## Оптимизации

Блокировка отправки пустой строки
Обновление form control

`Поддержка Ege, Chrome, Yandex последних версий`
