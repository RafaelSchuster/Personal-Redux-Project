import React from "react";

function ThingTable({ things, editCallback }) {
  return (
    <div>
      <button
        onClick={() =>
          editCallback({ id: 7, product: "ball", category: "toy" })
        }
      >
        Start Editing
      </button>
      {things.map((t) => (
        <>
          <div>{t.product}</div> <div>{t.category}</div>
        </>
      ))}
    </div>
  );
}

export default ThingTable;
