import IAction from "../Models/IAction";
import IPoint from "../Models/IPoint";

export interface IRemovePoint extends IAction {
  type: "REMOVE_POINT";
  point: IPoint;
}

export const RemovePoint = (point: IPoint): IRemovePoint => ({
  type: "REMOVE_POINT",
  point: point
});
