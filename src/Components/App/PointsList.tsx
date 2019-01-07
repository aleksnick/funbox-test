import React from "react";
import { connect } from "react-redux";
import { SortPoints } from "../../Actions/SortPoints";
import IStore from "../../Models/IStore";
import SortedList from "../UI/SortedList";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";

export interface PointsListProps {}

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
    const points = this.props.points;
    return points.map((point, i) => {
      return (
        <Paper key={i}>
          <ListItem>
            <ListItemText primary={point.displayName} />
          </ListItem>
        </Paper>
      );
    });
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PointsList);
