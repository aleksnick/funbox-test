import React from "react";
import IWithStyles from "../Models/IWithStyles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "./IconButton";
import { ButtonColor } from "./Button";
import { withStyles } from "@material-ui/core";

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

export interface ControlProps extends IWithStyles {
  placeholder: string;
  onSubmit?: (value: string) => void;
}

export interface ControlState {
  value: string;
}

/**
 * Badge
 *
 * @export
 * @class Control
 * @extends {React.Component<ControlProps>}
 */
export class Control extends React.Component<ControlProps, ControlState> {
  constructor(props: ControlProps) {
    super(props);
    this.state = {
      value: ""
    };
  }

  render() {
    const { classes, placeholder, children } = this.props;
    return (
      <Paper className={classes["root"]} elevation={1}>
        <InputBase onChange={this.onChange} className={classes["input"]} placeholder={placeholder} value={this.state.value} />
        <Divider className={classes["divider"]} />
        <IconButton
          onClick={this.onSubmit}
          color={ButtonColor.Primary}
          className={classes["iconButton"]}
          aria-label="Directions"
        >
          {children}
        </IconButton>
      </Paper>
    );
  }

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      value: e.currentTarget.value
    });
  };

  onSubmit = () => {
    const onSubmit = this.props.onSubmit;
    if (onSubmit) {
      this.setState({
        value: ""
      });
      onSubmit(this.state.value);
    }
  }
}

export default withStyles(styles)(Control);
