import React from "react";
import { showMap, showPoints } from "../../Helpers/Map";
import { Points } from "../../Models/IPoint";
import IMap from "../../Models/IMap";
import { Geometry } from "../../Models/Geometry";
import ICanStyled from "../../Models/ICanStyled";

export interface MapProps extends ICanStyled {
  center: Geometry;
  zoom: number;
  points: Points;
  onDragPoint?: (pointId: number, pointGeometry: Geometry) => void;
}

/**
 * Компонент с картой
 *
 * @export
 * @class Map
 * @extends {React.Component<MapProps>}
 */
export default class Map extends React.Component<MapProps> {
  private root = "map";
  private map: IMap;

  constructor(props: MapProps) {
    super(props);
  }

  componentDidMount() {
    const { center, zoom } = this.props;
    showMap(this.root, center, zoom, map => {
      this.map = map;
      this.renderPoints();
    });
  }

  render() {
    const { className } = this.props;
    this.renderPoints();
    return (
      <React.Fragment>
        <div id={this.root} className={className} />
      </React.Fragment>
    );
  }

  renderPoints = () => {
    if (this.map != null) {
      showPoints(this.map, this.props.points.slice(), this.onDragPoint);
    }
  };

  onDragPoint = (pointId: number, pointGeometry: Geometry) => {
    const onDragPoint = this.props.onDragPoint;
    if (onDragPoint) {
      onDragPoint(pointId, pointGeometry);
    }
  };
}
