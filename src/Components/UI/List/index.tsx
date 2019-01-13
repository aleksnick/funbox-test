import React from "react";
import UIList from "@material-ui/core/List";
import ICanStyled from "../../../Models/ICanStyled";

export interface ListProps extends ICanStyled {}

/**
 * Список
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
    const { className, children } = this.props;
    return <UIList className={className}>{children}</UIList>;
  }
}
