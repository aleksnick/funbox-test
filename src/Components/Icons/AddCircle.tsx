import React from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";

export interface AddCircleProps {}

/**
 * Иконка добавления
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
