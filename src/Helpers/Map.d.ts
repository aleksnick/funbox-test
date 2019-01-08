import { Geometry } from "../Models/Geometry";
import IMap from "../Models/IMap";
import { Points } from "../Models/IPoint";

/**
 * Показать карту
 *
 * @export
 * @param {string} root
 * @param {Geometry} center
 * @param {number} zoom
 * @param {(map: IMap) => void} onReady
 */
export function showMap(
  root: string,
  center: Geometry,
  zoom: number,
  onReady: (map: IMap) => void
): void;

/**
 * Отобразить точки на карте
 *
 * @export
 * @param {IMap} map
 * @param {Points} points
 * @param {(pointId: number, pointGeometry: Geometry) => void} onDragPoint
 */
export function showPoints(
  map: IMap,
  points: Points,
  onDragPoint: (pointId: number, pointGeometry: Geometry) => void
): void;
