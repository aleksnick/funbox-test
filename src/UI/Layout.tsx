import React from "react";
import Grid from "@material-ui/core/Grid";

export interface LayoutProps {
  sidebar: React.ReactNode;
}

/**
 * Badge
 *
 * @export
 * @class Layout
 * @extends {React.Component<LayoutProps>}
 */
export default class Layout extends React.Component<LayoutProps> {
  constructor(props: LayoutProps) {
    super(props);
  }

  render() {
    const { sidebar, children } = this.props;
    return (
      <Grid xs={12} container spacing={16}>
        <Grid item>{sidebar}</Grid>
        <Grid item xs>
          {children}
        </Grid>
      </Grid>
    );
  }
}
