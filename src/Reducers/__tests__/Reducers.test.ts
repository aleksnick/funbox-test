import Reducer from "../";
import { IInit } from "../../Actions/Init";
import { IAddPoint } from "../../Actions/AddPoint";
import { IDragPoint } from "../../Actions/DragPoint";
import { ISortPoints } from "../../Actions/SortPoints";
import { IRemovePoint } from "../../Actions/RemovePoint";

describe("Reducer", () => {
  const init_points = () => {
    return [
      {
        displayName: "one",
        geometry: [1, 2]
      },
      {
        displayName: "two",
        geometry: [3, 4]
      }
    ];
  };

  describe("Init App", () => {
    test("Init App", () => {
      const points = init_points();
      const action = {
        type: "INIT_APP",
        points: points
      } as IInit;
      const state = () => {
        return {
          name: "state",
          points: []
        };
      };
      const state_in = state();
      const state_out = {
        name: "state",
        points: points
      };
      expect(Reducer(state_in, action)).toEqual(state_out);
      expect(state_in).toEqual(state());
    });
  });

  describe("Add Point", () => {
    test("Add Point", () => {
      const action = {
        type: "ADD_POINT",
        point: {
          displayName: "two",
          geometry: [3, 4]
        }
      } as IAddPoint;
      const state = () => {
        return {
          name: "state",
          points: [
            {
              displayName: "one",
              geometry: [1, 2]
            }
          ]
        };
      };
      const state_in = state();
      const state_out = {
        name: "state",
        points: init_points()
      };
      expect(Reducer(state_in, action)).toEqual(state_out);
      expect(state_in).toEqual(state());
    });
  });

  describe("Drag Point", () => {
    test("Drag Point", () => {
      const action = {
        type: "DRAG_POINT",
        pointIndex: 1,
        geometry: [30, 40]
      } as IDragPoint;
      const state = () => {
        return {
          name: "state",
          points: init_points()
        };
      };
      const state_in = state();
      const state_out = {
        name: "state",
        points: [
          {
            displayName: "one",
            geometry: [1, 2]
          },
          {
            displayName: "two",
            geometry: [30, 40]
          }
        ]
      };
      expect(Reducer(state_in, action)).toEqual(state_out);
      expect(state_in).toEqual(state());
    });
  });

  describe("Sort Points", () => {
    test("Sort Points", () => {
      const action = {
        type: "SORT_POINTS",
        dragIndex: 0,
        dropIndex: 1
      } as ISortPoints;
      const state = () => {
        return {
          name: "state",
          points: init_points()
        };
      };
      const state_in = state();
      const state_out = {
        name: "state",
        points: [
          {
            displayName: "two",
            geometry: [3, 4]
          },
          {
            displayName: "one",
            geometry: [1, 2]
          }
        ]
      };
      expect(Reducer(state_in, action)).toEqual(state_out);
      expect(state_in).toEqual(state());
    });
  });

  describe("Remove Point", () => {
    test("Remove Point", () => {
      const action = {
        type: "REMOVE_POINT",
        pointIndex: 1
      } as IRemovePoint;
      const state = () => {
        return {
          name: "state",
          points: init_points()
        };
      };
      const state_in = state();
      const state_out = {
        name: "state",
        points: [
          {
            displayName: "one",
            geometry: [1, 2]
          }
        ]
      };
      expect(Reducer(state_in, action)).toEqual(state_out);
      expect(state_in).toEqual(state());
    });
  });
});
