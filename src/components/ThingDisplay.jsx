import React from "react";
import { connect } from "react-redux";
import { saveThing, deleteThing } from "../store";
import { THINGS } from "../store/DataTypes";
import { EditorConnector } from "../store/EditorConnector";
import { TableConnector } from "../store/TableConnector";
import ThingEditor from "./ThingEditor";
import ThingTable from "./ThingTable";

const ConnectedEditorThings = EditorConnector(THINGS, ThingEditor);
const ConnectedTableThings = TableConnector(THINGS, ThingTable);

const mapStateToProps = (dataStore) => ({
  //selector
  things: dataStore.modelData.things,
});

const mapDispatchToProps = {
  saveCallback: saveThing,
  deleteCallback: deleteThing,
};

const connectFunction = connect(mapStateToProps, mapDispatchToProps);

export const ThingDisplay = connectFunction(
  ({ things, saveCallback, deleteCallback }) => {
    return (
      <div>
        {things.map((t) => (
          <div key={t.id}>
            {t.product} ---
            {t.category}
          </div>
        ))}
        <button
          onClick={() => saveCallback({ product: "bread", category: "food" })}
        >
          Add thing
        </button>
        <button onClick={() => deleteCallback({ id: 1 })}>Delete thing</button>
        <ConnectedEditorThings />
        <ConnectedTableThings />
      </div>
    );
  }
);
