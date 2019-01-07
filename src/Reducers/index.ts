import { Actions } from "../Actions";
import { ArrayHelper } from "../Helpers/Array";
import IStore from "../Models/IStore";
import { array } from "prop-types";

/**
 * Reducer
 *
 * @export
 * @param {IStore} state
 * @param {Actions} action
 * @returns
 */
export default function reducer(state: IStore, action: Actions) {
  switch (action.type) {
    case "INIT_APP":
      return {
        ...state,
        points: action.points
      };
    case "ADD_POINT":
      return {
        ...state,
        points: state.points.concat(action.point)
      };
    case "DRAG_POINT":
      return {
        ...state,
        points: state.points.map((point, i) => {
          return i === action.pointIndex
            ? {
                displayName: point.displayName,
                geometry: action.geometry
              }
            : point;
        })
      };
    case "SORT_POINTS":
      return {
        ...state,
        points: ArrayHelper.Move(
          state.points,
          action.dragIndex,
          action.dropIndex
        )
      };
    default:
      return state;
  }
}
