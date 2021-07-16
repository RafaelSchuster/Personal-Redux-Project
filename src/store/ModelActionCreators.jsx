import { PEOPLE, THINGS } from "./DataTypes";
import { STORE, UPDATE, DELETE } from "./ModelActionTypes";

let idCounter = 100;

export const savePerson = (person) => {
  return createSaveEvent(PEOPLE, person);
};

export const saveThing = (thing) => {
  return createSaveEvent(THINGS, thing);
};

const createSaveEvent = (dataType, payload) => {
  // Action Creator
  if (!payload.id) {
    return {
      //Action
      type: STORE,
      dataType: dataType,
      payload: { ...payload, id: idCounter++ },
    };
  } else {
    return {
      //Action
      type: UPDATE,
      dataType: dataType,
      payload: payload,
    };
  }
};

export const deletePerson = (product) => ({
  type: DELETE,
  dataType: PEOPLE,
  payload: product.id,
});

export const deleteThing = (supplier) => ({
  type: DELETE,
  dataType: THINGS,
  payload: supplier.id,
});
