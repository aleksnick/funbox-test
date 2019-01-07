export class ArrayHelper {
  static Move<T>(arr: Array<T>, oldIndex: number, newIndex: number): Array<T> {
    if (newIndex === oldIndex || arr.length === 0) {
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
}
