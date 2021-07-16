import { createStore, combineReducers } from "redux";
import customReducerEnhancer from "./CustomEnhancedReducer";
import ModelReducer from "./ModelReducer";
import StateReducer from "./StateReducer";

// export default createStore(
//   combineReducers({ modelData: ModelReducer, stateData: StateReducer })
// );

export default createStore(
  customReducerEnhancer(
    combineReducers({ modelData: ModelReducer, stateData: StateReducer })
  )
);

export {
  savePerson,
  saveThing,
  deletePerson,
  deleteThing,
} from "./ModelActionCreators";
