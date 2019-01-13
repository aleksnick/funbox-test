import React from "react";
import Baseline from "@material-ui/core/CssBaseline";

export interface CssBaselineProps {}

/**
 * Базовые css стили
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
