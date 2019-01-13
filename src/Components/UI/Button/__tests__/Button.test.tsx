import React from "react";
import Button from "../";
import { render } from "enzyme";

describe("Button", () => {
  describe("Snapshots", () => {
    test("Simple Button snapshot", () => {
      const wrapper = render(<Button>Button</Button>);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
