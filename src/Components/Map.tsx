import React from "react";
import { showMap, showPoints } from "../Helpers/Map";
import IWithStyles from "../Models/IWithStyles";
import { withStyles } from "@material-ui/core/styles";
import { Points } from "../Models/IPoint";
import IMap from "../Models/IMap";

const styles = {
  map: {
    width: "100%",
    height: "100vh"
  }
};

const zoom = 8;
const center = [55.76, 37.64];

export interface MapProps extends IWithStyles {
  points: Points;
}

/**
 * Основной компонент приложения
 *
 * @export
 * @class Map
 * @extends {React.Component<MapContext>}
 */
export class Map extends React.Component<MapProps> {
  private root = "map";
  private map: IMap;

  constructor(props: MapProps) {
    super(props);
  }

  componentDidMount() {
    showMap(this.root, center, zoom, map => {
      this.map = map;
      this.renderPoints();
    });
  }

  render() {
    const { classes } = this.props;
    this.renderPoints();
    return (
      <React.Fragment>
        <div id={this.root} className={classes["map"]} />
      </React.Fragment>
    );
  }

  renderPoints = () => {
    if (this.map != null) {
      showPoints(this.map, this.props.points);
    }
  };
}

export default withStyles(styles)(Map);
