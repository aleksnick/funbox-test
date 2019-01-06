import React from "react";
import { connect } from "react-redux";
import Control from "../UI/Control";
import AddCircle from "@material-ui/icons/AddCircle";
import { AddPoint } from "../Actions/AddPoint";
import { MapOptions} from "../Models/MapOptions";

export interface ControlsProps {
}

const mapDispatchToProps = {
  addPoint: AddPoint
};

export type ControlsContext = ControlsProps & typeof mapDispatchToProps;

/**
 * Основной компонент приложения
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
      <Control onSubmit={this.onAddPoint} placeholder={"Добавить пункт на карту"}>
        <AddCircle />
      </Control>
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
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Controls);
