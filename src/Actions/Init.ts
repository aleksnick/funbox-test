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
  points: new Array()
});
