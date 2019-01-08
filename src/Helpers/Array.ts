export class ArrayHelper {
  /**
   * Получить новый массив,
   * при этом изменив порядковый номер определенного элемента
   *
   * @static
   * @template T
   * @param {Array<T>} arr
   * @param {number} oldIndex
   * @param {number} newIndex
   * @returns {Array<T>}
   * @memberof ArrayHelper
   */
  static Move<T>(arr: Array<T>, oldIndex: number, newIndex: number): Array<T> {
    if (
      newIndex === oldIndex ||
      !this.CheckIndex(arr, oldIndex) ||
      !this.CheckIndex(arr, newIndex)
    ) {
      return arr;
    }
    let newArr = new Array<T>();
    for (let i = 0; i < arr.length; i++) {
      if (i === oldIndex) {
        continue;
      }
      if (i !== newIndex) {
        newArr.push(arr[i]);
        continue;
      }
      if (newIndex > oldIndex) {
        newArr.push(arr[i]);
        newArr.push(arr[oldIndex]);
      } else {
        newArr.push(arr[oldIndex]);
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }

  /**
   * Получить новый массив,
   * при этом удалив один элемент
   *
   * @static
   * @template T
   * @param {Array<T>} arr
   * @param {number} index
   * @returns {Array<T>}
   * @memberof ArrayHelper
   */
  static Delete<T>(arr: Array<T>, index: number): Array<T> {
    if (!this.CheckIndex(arr, index)) {
      return arr;
    }
    let newArr = new Array<T>();
    for (let i = 0; i < arr.length; i++) {
      if (i !== index) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }

  /**
   * Проверить что индекс существует внутри массива
   *
   * @static
   * @template T
   * @param {Array<T>} arr
   * @param {number} index
   * @returns {boolean}
   * @memberof ArrayHelper
   */
  static CheckIndex<T>(arr: Array<T>, index: number): boolean {
    return index >= 0 && index < arr.length;
  }
}
