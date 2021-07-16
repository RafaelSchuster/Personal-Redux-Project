import React, { useEffect } from "react";
import { resetStore } from "../store/CustomEnhancedReducer";
import { startCreatingPerson } from "../store/StateActions";

function DsApiGet({ store }) {
  const stateDS = store.getState();

  const onChangeOfDS = () => {
    console.log(store.getState());
  };
  const dispatchAction = () => {
    store.dispatch(startCreatingPerson());
  };
  const dispatchReset = () => {
    store.dispatch(resetStore());
  };
  useEffect(() => {
    const unsubscribe = store.subscribe(() => onChangeOfDS());
    return () => unsubscribe();
  }, []);

  return (
    <>
      <div>{JSON.stringify(store.getState())}</div>
      <button onClick={dispatchAction}>Dispatch</button>
      <button onClick={dispatchReset}>Reset</button>
    </>
  );
}

export default DsApiGet;
