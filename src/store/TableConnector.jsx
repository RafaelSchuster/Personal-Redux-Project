import { connect } from "react-redux";
import { startEditingPerson, startEditingThing } from "./StateActions";
import { deletePerson, deleteThing } from "./ModelActionCreators";
import { PEOPLE, THINGS } from "./DataTypes";

export const TableConnector = (dataType, presentationComponent) => {
  // On Web Services Chapter there's an update in the end with MergeProps and connecting the Data store with Web Services
  const mapStateToProps = (storeData, ownProps) => ({
    people: storeData.modelData[PEOPLE],
    things: storeData.modelData[THINGS],
  });
  // const mapDispatchToProps = (dispatch, ownProps) => {
  const mapDispatchToProps = {
    editCallback: dataType === PEOPLE ? startEditingPerson : startEditingThing,
    deleteCallback: dataType === PEOPLE ? deletePerson : deleteThing,
  };
  return connect(mapStateToProps, mapDispatchToProps)(presentationComponent);
};
