import IAction from "../Models/IAction";
import IStore from "../Models/IStore";
import { Points } from "../Models/IPoint";

/**
 * Инициализация приложения
 *
 * @export
 * @interface IInit
 * @extends {IAction}
 * @extends {IStore}
 */
export interface IInit extends IAction, IStore {
  type: "INIT_APP";
  points: Points;
}

export const Init = (): IInit => ({
  type: "INIT_APP",
  points: [
    {
      displayName: "1",
      geometry: [55.8, 37.5]
    },
    {
      displayName: "2",
      geometry: [55.8, 37.4]
    }
  ]
});
