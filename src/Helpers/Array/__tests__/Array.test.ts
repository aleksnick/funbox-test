import { ArrayHelper } from "../";

describe("Array", () => {
  describe("Check index", () => {
    test("Check index", () => {
      expect(ArrayHelper.CheckIndex([1, 2, 3], 0)).toEqual(true);
      expect(ArrayHelper.CheckIndex([1, 2, 3], -1)).toEqual(false);
      expect(ArrayHelper.CheckIndex([1, 2, 3], 2)).toEqual(true);
      expect(ArrayHelper.CheckIndex([1, 2, 3], 3)).toEqual(false);
    });
  });

  describe("Move", () => {
    test("Not change", () => {
      const ms1 = [1, 2, 3];
      const ms2 = ArrayHelper.Move(ms1, 1, 1);
      expect(ms1).toEqual([1, 2, 3]);
      expect(ms2).toEqual([1, 2, 3]);
    });
    test("Moving 1", () => {
      const ms1 = [1, 2, 3];
      const ms2 = ArrayHelper.Move(ms1, 1, 2);
      expect(ms1).toEqual([1, 2, 3]);
      expect(ms2).toEqual([1, 3, 2]);
    });
    test("Moving 2", () => {
      const ms1 = [1, 2, 3, 4];
      const ms2 = ArrayHelper.Move(ms1, 1, 3);
      expect(ms1).toEqual([1, 2, 3, 4]);
      expect(ms2).toEqual([1, 3, 4, 2]);
    });
  });

  describe("Delete", () => {
    test("Not change", () => {
      const ms1 = [1, 2, 3];
      const ms2 = ArrayHelper.Delete(ms1, 3);
      expect(ms1).toEqual([1, 2, 3]);
      expect(ms2).toEqual([1, 2, 3]);
    });
    test("Delete 1", () => {
      const ms1 = [1, 2, 3];
      const ms2 = ArrayHelper.Delete(ms1, 1);
      expect(ms1).toEqual([1, 2, 3]);
      expect(ms2).toEqual([1, 3]);
    });
    test("Delete 2", () => {
      const ms1 = [1, 2, 3, 4];
      const ms2 = ArrayHelper.Delete(ms1, 2);
      expect(ms1).toEqual([1, 2, 3, 4]);
      expect(ms2).toEqual([1, 2, 4]);
    });
  });
});
