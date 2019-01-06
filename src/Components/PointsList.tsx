import React from "react";
import SortedList from "../UI/SortedList";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";

export interface PointsListProps {}

/**
 * Основной компонент приложения
 *
 * @export
 * @class PointsList
 * @extends {React.Component<PointsListContext>}
 */
export default class PointsList extends React.Component<PointsListProps> {
  constructor(props: PointsListProps) {
    super(props);
  }

  render() {
    return (
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
    );
  }
}
