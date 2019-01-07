import React from "react";
import { connect } from "react-redux";
import Layout from "../UI/Layout";
import Sidebar from "./Sidebar";
import IStore from "../../Models/IStore";
import CssBaseline from "@material-ui/core/CssBaseline";
import Map from "./Map";
import { DragPoint } from "../../Actions/DragPoint";
import { MapOptions } from "../../Models/MapOptions";

export interface AppProps {}

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
    const { points, dragPoint } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <Layout sidebar={<Sidebar />}>
          <Map
            center={MapOptions.center}
            zoom={MapOptions.zoom}
            points={points}
            onDragPoint={dragPoint}
          />
        </Layout>
      </React.Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
