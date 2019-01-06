import { Geometry } from "./Geometry";

/**
 * Действие
 *
 * @export
 * @interface IPoint
 */
export default interface IPoint {
  displayName: string;
  geometry: Geometry;
}

export type Points = Array<IPoint>;
