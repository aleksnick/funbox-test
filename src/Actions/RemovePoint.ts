import IAction from "../Models/IAction";

/**
 * Удаление точки
 *
 * @export
 * @interface IRemovePoint
 * @extends {IAction}
 */
export interface IRemovePoint extends IAction {
  type: "REMOVE_POINT";
  pointIndex: number;
}

export const RemovePoint = (pointIndex: number): IRemovePoint => ({
  type: "REMOVE_POINT",
  pointIndex: pointIndex
});
