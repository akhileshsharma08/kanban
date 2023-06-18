import React from "react";
import OnProgressContainer from "./onProgressContainer";
import CompleteTodoContainer from "./CompleteTodoContainer";
import CreationTodoContainer from "./CreationTodoContainer";

const AllPhases = () => {
  return (
    <div>
      <div className="maintodocontainer my-8 flex justify-center items-center">
        <div className="creationtodocontainer">
            <CreationTodoContainer/>
        </div>
        {/* on progress todo */}
        <div className="onProgressContainer">
            <OnProgressContainer/>
        </div>
        {/* done todo */}
        <div className="DoneContainer">
            <CompleteTodoContainer/>
        </div>
      </div>
    </div>
  );
};

export default AllPhases;
