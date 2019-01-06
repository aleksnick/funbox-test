import { Actions } from "../Actions";
import IStore from "../Models/IStore";

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
    default:
      return state;
  }
}
