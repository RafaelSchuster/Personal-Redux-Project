import { connect } from "react-redux";
import { endEditing } from "./StateActions";
import { savePerson, saveThing } from "./ModelActionCreators";
import { PEOPLE, THINGS } from "./DataTypes";

export const EditorConnector = (dataType, presentationComponent) => {
  const mapStateToProps = (storeData) => ({
    editing:
      storeData.stateData.editing &&
      storeData.stateData.selectedType === dataType,
    people:
      storeData.modelData[PEOPLE].find(
        (p) => p.id === storeData.stateData.selectedId
      ) || {},
    things:
      storeData.modelData[THINGS].find(
        (s) => s.id === storeData.stateData.selectedId
      ) || {},
  });

  //   const mapDispatchToProps = {
  //     cancelCallback: endEditing,
  //     saveCallback: dataType === PEOPLE ? savePerson : saveThing,
  //   };

  const mapDispatchToProps = (dispatch) => ({
    cancelCallback: dispatch(endEditing()),
    saveCallback: (data) => {
      dispatch((dataType === PEOPLE ? savePerson : saveThing)(data));
      dispatch(endEditing());
    },
  });

  return connect(mapStateToProps, mapDispatchToProps)(presentationComponent);
};
