import { PEOPLE, THINGS } from "./DataTypes";

export const initialData = {
  modelData: {
    [PEOPLE]: [
      { id: 1, name: "Bob", age: 30 },
      { id: 2, name: "Jane", age: 60 },
      { id: 3, name: "Bill", age: 90 },
    ],
    [THINGS]: [
      { id: 1, product: "shoe", category: "apparel" },
      { id: 2, product: "cheese", category: "food" },
      { id: 3, product: "house", category: "real-estate" },
    ],
  },
  stateData: {
    editing: false,
    selectedId: -1,
    selectedType: PEOPLE,
  },
};
