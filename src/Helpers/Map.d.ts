import { Geometry } from "../Models/Geometry";
import IMap from "../Models/IMap";
import { Points } from "../Models/IPoint";

export function showMap(root: string, center: Geometry, zoom: number, onReady: (map: IMap) => void): void;

export function showPoints(map: IMap, points: Points, onDragPoint: (pointId: number, pointGeometry: Geometry) => void): void;