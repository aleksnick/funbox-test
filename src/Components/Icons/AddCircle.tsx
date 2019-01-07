import React from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";

export interface AddCircleProps {}

/**
 * Кнопка с иконкой
 *
 * @export
 * @class AddCircle
 * @extends {React.Component<AddCircleProps>}
 */
export default class AddCircle extends React.Component<AddCircleProps> {
  constructor(props: AddCircleProps) {
    super(props);
  }

  render() {
    return <AddCircleIcon />;
  }
}
