import React from "react";
import IconButton from "../";
import { render, shallow } from "enzyme";

describe("IconButton", () => {
  describe("Snapshots", () => {
    test("Simple IconButton snapshot", () => {
      const wrapper = render(<IconButton>IconButton</IconButton>);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("Check properties", () => {
    test("IconButton OnClick", () => {
      let changeValue = false;
      const onClick = () => {
        changeValue = true;
      };

      const wrapper = shallow(
        <IconButton onClick={onClick}>IconButton</IconButton>
      );
      wrapper.simulate("click");

      expect(changeValue).toBe(true);
    });
  });
});
