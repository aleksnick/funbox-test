import IAction from "../Models/IAction";
import { Geometry } from "../Models/Geometry";

/**
 * Перемещение точки на карте
 *
 * @export
 * @interface IDragPoint
 * @extends {IAction}
 */
export interface IDragPoint extends IAction {
  type: "DRAG_POINT";
  pointIndex: number;
  geometry: Geometry;
}

export const DragPoint = (
  pointIndex: number,
  geometry: Geometry
): IDragPoint => ({
  type: "DRAG_POINT",
  pointIndex: pointIndex,
  geometry: geometry
});
