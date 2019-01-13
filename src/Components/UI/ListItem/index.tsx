import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Paper from "@material-ui/core/Paper";
import ICanStyled from "../../../Models/ICanStyled";

export interface ListProps extends ICanStyled {
  extraContent?: React.ReactNode;
}

/**
 * Элемент списка
 *
 * @export
 * @class List
 * @extends {React.Component<ListProps>}
 */
export default class List extends React.Component<ListProps> {
  constructor(props: ListProps) {
    super(props);
  }

  render() {
    const { className, children, extraContent } = this.props;
    return (
      <Paper className={className}>
        <ListItem>
          <ListItemText primary={children} />
          <ListItemSecondaryAction>{extraContent}</ListItemSecondaryAction>
        </ListItem>
      </Paper>
    );
  }
}
