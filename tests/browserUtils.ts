import { WebElement, Key, WebDriver, By, until } from "selenium-webdriver";

/**
 * Получить элемент, когда он появится и отобразится на странице
 *
 * @param {WebDriver} driver Инстанс драйвера
 * @param {By} by Селектор
 * @see {@link https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_By.html}
 * @param {number} [timeout] Таймаут ожидания появления элемента
 * @returns {Promise<WebElement>} Промис, возвращающий первый элемент, удовлетворяющий заданному селектору, либо reject по таймауту
 */
export async function getElement(driver: WebDriver, by: By, timeout: number = 5000): Promise<WebElement> {
  const el = await driver.wait(until.elementLocated(by), timeout);
  return await driver.wait(until.elementIsVisible(el), timeout);
}

/**
 * Очистить инпут (Комбинация клавиш Ctrl+A+Del)
 * @param input Элемент инпута
 */
export const clearInput = async (input: WebElement) => await input.sendKeys(Key.chord(Key.CONTROL, "a", Key.DELETE));

/**
 * Убрать фокус с инпута (Переводит фокус на следующий элемент клавишей Tab)
 * @param input Элемент инпута
 */
export const clearFocus = async (input: WebElement) => await input.sendKeys(Key.TAB);

/**
 * Содержит ли элемент нужный класс
 *
 * @param {WebElement} Элемент
 * @param {string} Название класса
 * @returns {Promise<boolean>} Промис, возвращающий результат проверки
 */
export const hasClassName = async (element: WebElement, className: string): Promise<boolean> => {
  return element.getAttribute("class").then(classNames => classNames != null && !!classNames.match(className));
};
