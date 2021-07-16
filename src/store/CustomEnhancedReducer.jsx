import React from "react";
import { initialData } from "./InitialData";

export const STORE_RESET = "store_clear";

export const resetStore = () => ({ type: STORE_RESET });

export function customReducerEnhancer(originalReducer) {
  let initialState = null;

  return (storeData, action) => {
    if (action.type === STORE_RESET && initialData != null) {
      return initialState; //returns "result" to the dataStore, original dataStore data
    } else {
      const result = originalReducer(storeData, action);
      if (initialState == null) {
        initialState = result; //prepares the initialState for the next reset
      }
      return result; //result of the original reducer without being enhanced
    }
  };
}

export default customReducerEnhancer;
