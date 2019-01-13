import React from "react";
import List from "../";
import ListItem from "../../ListItem";
import { render } from "enzyme";

describe("List", () => {
  describe("Snapshots", () => {
    test("Simple List snapshot", () => {
      const wrapper = render(
        <List>
          <ListItem key={0}>One</ListItem>
          <ListItem key={1}>Two</ListItem>
          <ListItem key={2}>Three</ListItem>
        </List>
      );
      expect(wrapper).toMatchSnapshot();
    });
  });
});
