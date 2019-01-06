import React from "react";
import SortedList from "../UI/SortedList";
import Controls from "./Controls";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import PointsList from "./PointsList";

export interface SidebarProps {}

/**
 * Основной компонент приложения
 *
 * @export
 * @class Sidebar
 * @extends {React.Component<SidebarContext>}
 */
export default class Sidebar extends React.Component<SidebarProps> {
  constructor(props: SidebarProps) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Controls />
        <PointsList />
      </React.Fragment>
    );
  }
}
