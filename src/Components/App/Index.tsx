import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import IWithStyles from "../../Models/IWithStyles";
import Layout from "../UI/Layout";
import Sidebar from "./Sidebar";
import IStore from "../../Models/IStore";
import CssBaseline from "../UI/CssBaseline";
import Map from "../Map";
import { DragPoint } from "../../Actions";
import { MapOptions } from "../../Models/MapOptions";

const styles = {
  main: {
    height: "100vh"
  },
  map: {
    width: "100%",
    height: "100%"
  }
};

export interface AppProps extends IWithStyles {}

export type AppInputs = AppProps & IStore;

const mapStateToProps = (state: IStore, props: AppProps) => ({
  points: state.points
});

const mapDispatchToProps = {
  dragPoint: DragPoint
};

export type AppContext = AppInputs & typeof mapDispatchToProps;

/**
 * Основной компонент приложения
 *
 * @export
 * @class App
 * @extends {React.Component<AppContext>}
 */
export class App extends React.Component<AppContext> {
  constructor(props: AppContext) {
    super(props);
  }

  render() {
    const { points, dragPoint, classes } = this.props;
    return (
      <div className={classes["main"]}>
        <CssBaseline />
        <Layout sidebar={<Sidebar />}>
          <Map
            className={classes["map"]}
            center={MapOptions.center}
            zoom={MapOptions.zoom}
            points={points}
            onDragPoint={dragPoint}
          />
        </Layout>
      </div>
    );
  }
}

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
