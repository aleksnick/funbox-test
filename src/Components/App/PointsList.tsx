import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core";
import { SortPoints, RemovePoint } from "../../Actions";
import IStore from "../../Models/IStore";
import SortedList from "../UI/SortedList";
import List from "../UI/List";
import ListItem from "../UI/ListItem";
import DeleteIcon from "../Icons/Delete";
import IWithStyles from "../../Models/IWithStyles";
import { ButtonColor } from "../UI/Button";
import IconButton from "../UI/IconButton";
import ICanStyled from "../../Models/ICanStyled";

const styles = {
  item: {
    marginBottom: 2
  },
  iconButton: {
    padding: 10
  }
};

export interface PointsListProps extends IWithStyles, ICanStyled {}

export type PointsListInputs = PointsListProps & IStore;

const mapStateToProps = (state: IStore, props: PointsListProps) => ({
  points: state.points
});

const mapDispatchToProps = {
  sortPoints: SortPoints,
  removePoint: RemovePoint
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
    const { className, sortPoints } = this.props;
    return (
      <List className={className}>
        <SortedList onSort={sortPoints}>{this.renderPoints()}</SortedList>
      </List>
    );
  }

  renderPoints = () => {
    const { points, classes, removePoint } = this.props;
    const deleteButton = (pointIndex: number) => (
      <IconButton
        onClick={() => removePoint(pointIndex)}
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
          key={i}
          className={classes["item"]}
          extraContent={deleteButton(i)}
        >
          {point.displayName}
        </ListItem>
      );
    });
  };
}

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PointsList)
);
