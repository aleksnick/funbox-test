export { Init } from "./Init";
export { AddPoint } from "./AddPoint";
export { DragPoint } from "./DragPoint";
export { SortPoints } from "./SortPoints";

import { IInit } from "./Init";
import { IAddPoint } from "./AddPoint";
import { IDragPoint } from "./DragPoint";
import { ISortPoints } from "./SortPoints";

export type Actions = IInit | IAddPoint | IDragPoint | ISortPoints;
