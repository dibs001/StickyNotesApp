import React from "react";

function Note(props) {
  return (
    <div className="note1">
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={()=>{
        props.deleteNote(props.id)}}>DELETE</button>
    </div>
    </div>
  );
}

export default Note;