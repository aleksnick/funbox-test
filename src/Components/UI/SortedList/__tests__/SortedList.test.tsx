import React from "react";
import SortedList from "../";
import ListItem from "../../ListItem";
import { render } from "enzyme";

describe("SortedList", () => {
  describe("Snapshots", () => {
    test("Simple SortedList snapshot", () => {
      const wrapper = render(
        <SortedList>
          <ListItem key={0}>One</ListItem>
          <ListItem key={1}>Two</ListItem>
          <ListItem key={2}>Three</ListItem>
        </SortedList>
      );
      expect(wrapper).toMatchSnapshot();
    });
  });
});
