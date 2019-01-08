import React from "react";
import { connect } from "react-redux";
import Control from "../UI/Control";
import AddCircleIcon from "../Icons/AddCircle";
import { AddPoint } from "../../Actions";
import { MapOptions } from "../../Models/MapOptions";
import ICanStyled from "../../Models/ICanStyled";

export interface ControlsProps extends ICanStyled {}

const mapDispatchToProps = {
  addPoint: AddPoint
};

export type ControlsContext = ControlsProps & typeof mapDispatchToProps;

/**
 * Инпут с кнопкой для добавления точек на карту
 *
 * @export
 * @class Controls
 * @extends {React.Component<ControlsContext>}
 */
export class Controls extends React.Component<ControlsContext> {
  constructor(props: ControlsContext) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.className}>
        <Control
          onSubmit={this.onAddPoint}
          placeholder={"Добавить пункт на карту"}
        >
          <AddCircleIcon />
        </Control>
      </div>
    );
  }

  onAddPoint = (value: string) => {
    const { addPoint } = this.props;
    if (addPoint) {
      addPoint({
        displayName: value,
        geometry: MapOptions.center
      });
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Controls);
