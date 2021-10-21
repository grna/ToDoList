import { mapStateToProps } from "../ToDoContainer";
import renderer from "react-test-renderer";
import React from "react";
import ToDoNode from "../ToDoNode";

describe("The ToDo Container", () => {
  describe("mapStateToProps", () => {
    it("Should map state to props", () => {
      const sampleTask = {
        _id: "task1",
        title: "Sample task",
        description: "Sample task description",
        status: "in progress",
      };
      const state = {
        fromTasks: {
          tasks: [sampleTask],
        },
      };
      const componentState = mapStateToProps(state);
      expect(componentState.tasks[0]).toEqual(sampleTask);
    });
  });
});

describe("ToDoNode component", () => {
  it("Should not regress", () => {
    const todo = {
      _id: "task1",
      title: "Sample task",
      description: "Sample task description",
      status: "in progress",
    };
    const updateTask = () => {};
    const deleteTask = () => {};
    const tree = renderer.create(
      <ToDoNode todo={todo} updateTask={updateTask} deleteTask={deleteTask} />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
