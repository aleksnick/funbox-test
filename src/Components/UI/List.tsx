import React from "react";
import UIList from "@material-ui/core/List";

export interface ListProps {}

/**
 * Кнопка с иконкой
 *
 * @export
 * @class List
 * @extends {React.Component<ListProps>}
 */
export default class List extends React.Component<ListProps> {
  constructor(props: ListProps) {
    super(props);
  }

  render() {
    return <UIList>{this.props.children}</UIList>;
  }
}
