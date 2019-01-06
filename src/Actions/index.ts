export { Init } from "./Init";
export { AddPoint } from "./AddPoint";

import { IInit } from "./Init";
import { IAddPoint } from "./AddPoint";

export type Actions = IInit | IAddPoint;