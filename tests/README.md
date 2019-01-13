# Тестирование

Краткое описание инфраструктуры тестирования React-компонентов

##### Используемые инструменты

- [Jest](https://jestjs.io/) - фреймворк для тестирования
- [Enzyme](https://airbnb.io/enzyme/docs/api) - утилита для рендеринга react-компонентов
- [Selenium](https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/index.html) - инструмент для имитации пользовательских действий в браузере

##### Структура тестов

Все тесты должны лежать в папке с названием \_\_tests\_\_
Для удобства тесты были разделены на два набора:

- Браузерные тесты (файлы \*.browser.test.ts)
- Юнит-тесты + shapshot-тесты

##### Запуск

Перед запуском тестов необходимо собрать ELMA Style Guide!

Запуск юнит-тестов:

```sh
$ yarn test
```

Запуск браузерных тестов:

```sh
$ yarn test-browser
```

Запустить все тесты:

```sh
$ yarn test-all
```

##### Jest CLI Options

Поочередный запуск тестов:

```sh
$ yarn test --runInBand
```

Запуск watch-mode:

```sh
$ yarn test --watch #runs tests related to uncommitted changes
$ yarn test --watchAll #runs all tests
```

Обновление snapshots:

```sh
$ yarn test --updateSnapshot
```

[More](https://doc.ebichu.cc/jest/docs/en/cli.html#content)

##### Полезные ссылки

[Модульное тестирование React-приложения с помощью Jest и Enzyme](https://medium.com/devschacht/berry-de-witte-unit-testing-your-react-application-with-jest-and-enzyme-6ef3658fdc93)
[Полная инструкция по тестированию React-компонентов](https://medium.com/devschacht/what-and-how-to-test-with-jest-and-enzyme-full-instruction-on-react-components-testing-d3504f3fbc54)
[Enzyme cheatsheet](https://devhints.io/enzyme)
[Difference between Shallow, Mount and Render of Enzyme](https://gist.github.com/oonsamyi/2422357b4e68a4461dcd11b7724291eb)
[Jest expect methods](https://doc.ebichu.cc/jest/docs/en/expect.html#methods)
