import { Location } from "./Location";

/**
 * Действие
 *
 * @export
 * @interface IPoint
 */
export default interface IPoint {
  displayName: string;
  location: Location;
}

export type Points = Array<IPoint>;
