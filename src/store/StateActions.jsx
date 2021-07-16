import { PEOPLE, THINGS } from "./DataTypes";

export const STATE_START_EDITING = "state_start_editing";
export const STATE_END_EDITING = "state_end_editing";
export const STATE_START_CREATING = "state_start_creating";

export const startEditingPerson = (person) => ({
  type: STATE_START_EDITING,
  dataType: PEOPLE,
  payload: person,
});

export const startEditingThing = (thing) => ({
  type: STATE_START_EDITING,
  dataType: THINGS,
  payload: thing,
});

export const endEditing = () => ({
  type: STATE_END_EDITING,
});
export const startCreatingPerson = () => ({
  type: STATE_START_CREATING,
  dataType: PEOPLE,
});
export const startCreatingThing = () => ({
  type: STATE_START_CREATING,
  dataType: THINGS,
});
