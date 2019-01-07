import React from "react";
import Baseline from "@material-ui/core/CssBaseline";

export interface CssBaselineProps {}

/**
 * Кнопка с иконкой
 *
 * @export
 * @class CssBaseline
 * @extends {React.Component<CssBaselineProps>}
 */
export default class CssBaseline extends React.Component<CssBaselineProps> {
  constructor(props: CssBaselineProps) {
    super(props);
  }

  render() {
    return <Baseline />;
  }
}
