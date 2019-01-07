import React from "react";
import Grid from "@material-ui/core/Grid";
import IWithStyles from "../../Models/IWithStyles";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  column: {
    paddingLeft: 4
  }
};

export interface LayoutProps extends IWithStyles {
  sidebar: React.ReactNode;
}

/**
 * Badge
 *
 * @export
 * @class Layout
 * @extends {React.Component<LayoutProps>}
 */
export class Layout extends React.Component<LayoutProps> {
  constructor(props: LayoutProps) {
    super(props);
  }

  render() {
    const { sidebar, classes, children } = this.props;
    return (
      <Grid xs={12} container>
        <Grid className={classes["column"]} item>
          {sidebar}
        </Grid>
        <Grid className={classes["column"]} item xs>
          {children}
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Layout);
