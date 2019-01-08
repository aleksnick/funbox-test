import IAction from "../Models/IAction";

/**
 * Переместить точку внутри списка
 *
 * @export
 * @interface ISortPoints
 * @extends {IAction}
 */
export interface ISortPoints extends IAction {
  type: "SORT_POINTS";
  dragIndex: number;
  dropIndex: number;
}

export const SortPoints = (
  dragIndex: number,
  dropIndex: number
): ISortPoints => ({
  type: "SORT_POINTS",
  dragIndex: dragIndex,
  dropIndex: dropIndex
});
