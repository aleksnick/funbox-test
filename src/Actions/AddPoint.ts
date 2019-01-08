import IAction from "../Models/IAction";
import IPoint from "../Models/IPoint";

/**
 * Добавление точки на карту
 *
 * @export
 * @interface IAddPoint
 * @extends {IAction}
 */
export interface IAddPoint extends IAction {
  type: "ADD_POINT";
  point: IPoint;
}

export const AddPoint = (point: IPoint): IAddPoint => ({
  type: "ADD_POINT",
  point: point
});
