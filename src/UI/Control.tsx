import React from "react";
import IWithStyles from "../Models/IWithStyles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "./IconButton";
import { ButtonColor } from "./Button";
import { withStyles } from "@material-ui/core";

export interface ControlProps extends IWithStyles {
  placeholder: string;
  onChange?: (value: string) => void;
}

const styles = {
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4
  }
};

/**
 * Badge
 *
 * @export
 * @class Control
 * @extends {React.Component<ControlProps>}
 */
export class Control extends React.Component<ControlProps> {
  constructor(props: ControlProps) {
    super(props);
  }

  render() {
    const { classes, placeholder, children } = this.props;
    return (
      <Paper className={classes["root"]} elevation={1}>
        <InputBase className={classes["input"]} placeholder={placeholder} />
        <Divider className={classes["divider"]} />
        <IconButton
          onClick={this.onChange}
          color={ButtonColor.Primary}
          className={classes["iconButton"]}
          aria-label="Directions"
        >
          {children}
        </IconButton>
      </Paper>
    );
  }

  onChange = () => {};
}

export default withStyles(styles)(Control);
