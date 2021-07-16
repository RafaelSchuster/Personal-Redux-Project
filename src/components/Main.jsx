import React from "react";
import DsApiGet from "./DsApiGet";
import { PeopleDisplay } from "./PeopleDisplay";
import { ThingDisplay } from "./ThingDisplay";
import dataStore from "../store";

function Main() {
  return (
    <div>
      <PeopleDisplay />
      <ThingDisplay />
      _______________
      <DsApiGet store={dataStore} />
    </div>
  );
}

export default Main;
