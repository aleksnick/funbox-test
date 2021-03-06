import React from "react";
import Button from "../";
import { render, shallow } from "enzyme";

describe("Button", () => {
  describe("Snapshots", () => {
    test("Simple Button snapshot", () => {
      const wrapper = render(<Button>Button</Button>);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("Check properties", () => {
    test("Button OnClick", () => {
      let changeValue = false;
      const onClick = () => {
        changeValue = true;
      };

      const wrapper = shallow(<Button onClick={onClick}>Button</Button>);
      wrapper.simulate("click");

      expect(changeValue).toBe(true);
    });
  });
});
