import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

export interface DeleteProps {}

/**
 * Кнопка с иконкой
 *
 * @export
 * @class Delete
 * @extends {React.Component<DeleteProps>}
 */
export default class Delete extends React.Component<DeleteProps> {
  constructor(props: DeleteProps) {
    super(props);
  }

  render() {
    return <DeleteIcon />;
  }
}
