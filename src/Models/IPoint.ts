import { Geometry } from "./Geometry";

/**
 * Точка на карте
 *
 * @export
 * @interface IPoint
 */
export default interface IPoint {
  displayName: string;
  geometry: Geometry;
}

export type Points = Array<IPoint>;
