import IAction from "../Models/IAction";

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
