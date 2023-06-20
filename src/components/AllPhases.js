import React,{useState,useEffect} from "react";
import OnProgressContainer from "./onProgressContainer";
import CompleteTodoContainer from "./CompleteTodoContainer";
import CreationTodoContainer from "./CreationTodoContainer";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import cardDetails from "./cardData";
import { DropResult } from "react-beautiful-dnd";

const AllPhases = () => {
  const [task, settask] = useState(cardDetails)
  const [completed, setCompleted] = useState([])
  const [progresstask, setProgresstask] = useState([])
  
//   useEffect(() => {
//  settask(cardDetails)
//   }, [])
  
  const onDragEnd = ( DropResult) => {
    const { destination, source } = DropResult;

    console.log(DropResult);

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let add;
    let active = task;
    let complete = completed;
    // Source Logic
    if (source.droppableId === "TodosList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    // Destination Logic
    if (destination.droppableId === "TodosList") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    setCompleted(complete);
    settask(active);
  };

  return (
    <div>
      <div className="maintodocontainer my-8 flex md:flex-row flex-col  justify-center items-center">
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="creationtodocontainer my-4 mx-4">
            <CreationTodoContainer task={task} settask={settask} completed={completed} setCompleted={setCompleted} />
          </div>

          {/* on progress todo-------------------- */}

          <div className="onProgressContainer">
            <OnProgressContainer  task={task} settask={settask} completed={completed} setCompleted={setCompleted}/>
          </div>

          {/* done todo-------------------- */}

          <div className="DoneContainer mx-4 my-4">
            <CompleteTodoContainer task={task} settask={settask} completed={completed} setCompleted={setCompleted} />
          </div>
        </DragDropContext>
      </div>
    </div>
  );
};

export default AllPhases;
