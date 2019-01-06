import React from "react";
import Control from "../UI/Control";
import AddCircle from "@material-ui/icons/AddCircle";

export interface ControlsProps {}

/**
 * Основной компонент приложения
 *
 * @export
 * @class Controls
 * @extends {React.Component<ControlsContext>}
 */
export default class Controls extends React.Component<ControlsProps> {
  constructor(props: ControlsProps) {
    super(props);
  }

  render() {
    return (
      <Control placeholder={"Добавить пункт на карту"}>
        <AddCircle />
      </Control>
    );
  }
}
