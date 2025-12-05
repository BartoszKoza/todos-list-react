import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: getTasksFromLocalStorage(),
    hideDone: false,
  },
  reducers: {
    addTask: ({ tasks }, { payload: task }) => {
      tasks.push(task);
    },
    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },
    toggleTaskDone: ({ tasks }, { payload: done }) => {
      const index = tasks.findIndex(({ id }) => id === done);
      tasks[index].done = !tasks[index].done;
    },
    removeTask: ({ tasks }, { payload: remove }) => {
      const index = tasks.findIndex(({ id }) => id === remove);
      tasks.splice(index, 1);
    },
    setAllDone: ({ tasks }) => {
      tasks.forEach((task) => {
        task.done = true;
      });
    },
    fetchExampleTasks: () => {},
    setTasks: (state, { payload: tasks }) => {
      state.tasks = tasks;
    },
  },
});

export const {
  addTask,
  toggleHideDone,
  toggleTaskDone,
  removeTask,
  setAllDone,
  fetchExampleTasks,
  setTasks,
} = tasksSlice.actions;
export const selectTasksState = (state) => state.tasks;
export const selectAreTasksEmpty = (state) => state.tasks.tasks.length !== 0;

export const selectAllDone = (state) =>
  state.tasks.tasks.every((task) => task.done);

export const getTaskById = (state, taskId) =>
  selectTasksState(state).tasks.find(({ id }) => id === taskId);

export const selectTasksByQuery = (state, query) => {
  const tasks = selectTasksState(state).tasks ?? [];
  if (!query || query.trim() === "") {
    return tasks;
  }
  return tasks.filter(({ content }) =>
    content.toUpperCase().includes(query.trim().toUpperCase())
  );
};

export default tasksSlice.reducer;
