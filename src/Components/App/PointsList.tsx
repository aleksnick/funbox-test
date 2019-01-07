import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core";
import { SortPoints } from "../../Actions";
import IStore from "../../Models/IStore";
import SortedList from "../UI/SortedList";
import List from "../UI/List";
import ListItem from "../UI/ListItem";
import DeleteIcon from "../Icons/Delete";
import IWithStyles from "../../Models/IWithStyles";
import { ButtonColor } from "../UI/Button";
import IconButton from "../UI/IconButton";

const styles = {
  item: {
    marginBottom: 2
  },
  iconButton: {
    padding: 10
  }
};

export interface PointsListProps extends IWithStyles {}

export type PointsListInputs = PointsListProps & IStore;

const mapStateToProps = (state: IStore, props: PointsListProps) => ({
  points: state.points
});

const mapDispatchToProps = {
  sortPoints: SortPoints
};

export type PointsListContext = PointsListInputs & typeof mapDispatchToProps;

/**
 * Основной компонент приложения
 *
 * @export
 * @class PointsList
 * @extends {React.Component<PointsListContext>}
 */
export class PointsList extends React.Component<PointsListContext> {
  constructor(props: PointsListContext) {
    super(props);
  }

  render() {
    return (
      <List>
        <SortedList onSort={this.props.sortPoints}>
          {this.renderPoints()}
        </SortedList>
      </List>
    );
  }

  renderPoints = () => {
    const { points, classes } = this.props;
    const deleteButton = (
      <IconButton
        onClick={this.onDelete}
        color={ButtonColor.Secondary}
        className={classes["iconButton"]}
        aria-label="Directions"
      >
        <DeleteIcon />
      </IconButton>
    );
    return points.map((point, i) => {
      return (
        <ListItem
          className={classes["item"]}
          key={i}
          extraContent={deleteButton}
        >
          {point.displayName}
        </ListItem>
      );
    });
  };

  onDelete = () => {
    console.log("delete");
  };
}

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PointsList)
);
