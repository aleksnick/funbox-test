import React from "react";
import ICanStyled from "../../../Models/ICanStyled";
import { SimpleButtonProps, ButtonColor } from "../../UI/Button";
import UIIconButton from "@material-ui/core/IconButton";

export interface IconButtonProps extends SimpleButtonProps, ICanStyled {}

/**
 * Кнопка с иконкой
 *
 * @export
 * @class IconButton
 * @extends {React.Component<IconButtonProps>}
 */
export default class IconButton extends React.Component<IconButtonProps> {
  constructor(props: IconButtonProps) {
    super(props);
  }

  render() {
    const { className, color, href, disabled, children } = this.props;
    return (
      <UIIconButton
        className={className}
        color={color || ButtonColor.Default}
        disabled={!!disabled}
        href={href}
        onClick={this.onClick}
      >
        {children}
      </UIIconButton>
    );
  }

  onClick = (e: React.ChangeEvent<{}>) => {
    const onClick = this.props.onClick;
    if (onClick) {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      onClick();
    }
  };
}
