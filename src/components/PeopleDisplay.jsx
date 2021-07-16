import React from "react";
import { connect } from "react-redux";
import { savePerson, deletePerson } from "../store";
import { PEOPLE } from "../store/DataTypes";
import { EditorConnector } from "../store/EditorConnector";
import { TableConnector } from "../store/TableConnector";
import PersonEditor from "./PersonEditor";
import PersonTable from "./PersonTable";

const ConnectedEditorPeople = EditorConnector(PEOPLE, PersonEditor);
const ConnectedTablePeople = TableConnector(PEOPLE, PersonTable);

const mapStateToProps = (dataStore) => ({
  //selector
  people: dataStore.modelData.people,
});

const mapDispatchToProps = {
  saveCallback: savePerson,
  deleteCallback: deletePerson,
};

const connectFunction = connect(mapStateToProps, mapDispatchToProps);

export const PeopleDisplay = connectFunction(
  ({ people, saveCallback, deleteCallback }) => {
    return (
      <div>
        {people.map((p) => (
          <div key={p.id}>
            {p.name}
            {p.age}
          </div>
        ))}
        <button onClick={() => saveCallback({ name: "Jill", age: 30 })}>
          Add person
        </button>
        <button onClick={() => deleteCallback({ id: 1 })}>Delete person</button>
        <ConnectedEditorPeople />
        <ConnectedTablePeople />
      </div>
    );
  }
);
