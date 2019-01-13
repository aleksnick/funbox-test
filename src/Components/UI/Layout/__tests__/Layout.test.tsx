import React from "react";
import Layout from "../";
import { render } from "enzyme";

describe("Layout", () => {
  describe("Snapshots", () => {
    test("Simple Layout snapshot", () => {
      const sidebar = <div>sidebar</div>;
      const wrapper = render(<Layout sidebar={sidebar}>Layout</Layout>);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
