// import React from "react";

function Child({ message, state }) {
    console.log("Child", message, state);
  return (
    <div>Child</div>
  )
}
// const ChildMemo = React.memo(Child);
export default Child;