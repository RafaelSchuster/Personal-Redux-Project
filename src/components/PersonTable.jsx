import React from "react";

function PersonTable({ editCallback }) {
  return (
    <div>
      <button onClick={() => editCallback({ id: 5, name: "Li", age: 65 })}>
        Start Editing
      </button>
    </div>
  );
}

export default PersonTable;
