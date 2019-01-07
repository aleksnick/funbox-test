import React from "react";
import Controls from "./Controls";
import PointsList from "./PointsList";

export interface SidebarProps {}

/**
 * Основной компонент приложения
 *
 * @export
 * @class Sidebar
 * @extends {React.Component<SidebarContext>}
 */
export default class Sidebar extends React.Component<SidebarProps> {
  constructor(props: SidebarProps) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Controls />
        <PointsList />
      </React.Fragment>
    );
  }
}
