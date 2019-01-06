import IAction from "../Models/IAction";
import { Geometry } from "../Models/Geometry";

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
