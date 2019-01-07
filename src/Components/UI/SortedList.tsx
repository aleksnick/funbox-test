import React from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult
} from "react-beautiful-dnd";

export interface DraggableItemProps {}

export interface SortedListProps {
  onSort?: (draggableId: number, destination: number) => void;
}

/**
 * Badge
 *
 * @export
 * @class SortedList
 * @extends {React.Component<SortedListProps>}
 */
export default class SortedList extends React.Component<SortedListProps> {
  constructor(props: SortedListProps) {
    super(props);
  }

  render() {
    const { children } = this.props;
    const childs = children as React.ReactElement<DraggableItemProps>[];

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div ref={provided.innerRef}>
              {childs.map(
                (item: React.ReactElement<DraggableItemProps>, index) => {
                  const key = item.key || index;
                  return (
                    <Draggable
                      key={key}
                      draggableId={key.toString()}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          {item}
                        </div>
                      )}
                    </Draggable>
                  );
                }
              )}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }

  onDragEnd = (result: DropResult) => {
    if (!result || !result.destination) {
      return;
    }
    const onSort = this.props.onSort;
    if (onSort) {
      onSort(parseInt(result.draggableId), result.destination.index);
    }
  };
}
