import IAction from "../Models/IAction";
import { Location } from "../Models/Location";

export interface IDragPoint extends IAction {
  type: "DRAG_POINT";
  pointIndex: number;
  location: Location;
}

export const DragPoint = (
  pointIndex: number,
  location: Location
): IDragPoint => ({
  type: "DRAG_POINT",
  pointIndex: pointIndex,
  location: location
});
