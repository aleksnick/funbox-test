import React from "react";
import SortedList from "../UI/SortedList";
import Controls from "./Controls";

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
        <SortedList>
          <div key="1">Sidebar 1</div>
          <div key="2">Sidebar 2</div>
          <div key="3">Sidebar 3</div>
        </SortedList>
      </React.Fragment>
    );
  }
}
