import React from "react";
import { withStyles } from "@material-ui/core";
import Controls from "./Controls";
import PointsList from "./PointsList";
import IWithStyles from "../../Models/IWithStyles";
import { FlexDirection } from "../../Models/FlexDirection";

const styles = {
  sidebar: {
    display: "flex",
    flexDirection: FlexDirection.Column,
    maxHeight: "100vh"
  },
  controls: {
    minHeight: 50
  },
  list: {
    flex: 1,
    overflow: "auto",
    paddingTop: 0,
    marginTop: 8
  }
};

export interface SidebarProps extends IWithStyles {}

/**
 * Левая панель
 *
 * @export
 * @class Sidebar
 * @extends {React.Component<SidebarProps>}
 */
export class Sidebar extends React.Component<SidebarProps> {
  constructor(props: SidebarProps) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes["sidebar"]}>
        <Controls className={classes["controls"]} />
        <PointsList className={classes["list"]} />
      </div>
    );
  }
}

export default withStyles(styles)(Sidebar);
