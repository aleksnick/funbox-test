import React from "react";
import Control from "../";
import { render, shallow } from "enzyme";

describe("Control", () => {
  describe("Snapshots", () => {
    test("Simple Control snapshot", () => {
      const wrapper = render(<Control>Control</Control>);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("Check properties", () => {
    test("Control OnSubmit", () => {
      let changeValue = false;
      const onSubmit = () => {
        changeValue = true;
      };

      const wrapper = shallow(<Control onSubmit={onSubmit}>Control</Control>);
      wrapper.simulate("submit");

      expect(changeValue).toBe(true);
    });
  });
});
