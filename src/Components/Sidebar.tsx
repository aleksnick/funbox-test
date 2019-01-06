import React from "react";
import SortedList from "../UI/SortedList";
import Controls from "./Controls";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";

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
          <List>
            <SortedList>
              <Paper key="1">
                <ListItem>
                  <ListItemText primary="Starred 1" />
                </ListItem>
              </Paper>
              <Paper key="2">
                <ListItem>
                  <ListItemText primary="Starred 2" />
                </ListItem>
              </Paper>
              <Paper key="3">
                <ListItem>
                  <ListItemText primary="Starred 3" />
                </ListItem>
              </Paper>
            </SortedList>
          </List>
      </React.Fragment>
    );
  }
}
