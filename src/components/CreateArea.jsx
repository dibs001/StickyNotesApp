import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';

function CreateArea(props) {
  const [isExpanded,setExpanded]=useState(false);
  const [note,setNote]=useState({
    title:"",
    content:""
  });
  function handleChange(event){
    const {name,value}=event.target;
    setNote(prevNote=>{
      return{
        ...prevNote,
        [name]:value
    };
  });
  }
  function submitNote(event){
    props.addNote(note);
    setNote({title:"",content:""});
    event.preventDefault();
  }
  return (
    <div>
      <form>
        {isExpanded&&(
          <input onChange={handleChange} name="title" placeholder="Title" value={note.title}/>
          )}
        <textarea 
        onClick={()=>{setExpanded(true);}}
        onChange={handleChange} 
        name="content" placeholder="Take a note..." rows={isExpanded?"3":"1"} value={note.content}/>
        <button onClick={submitNote}><AddIcon /></button>
      </form>

    </div>
  );
}

export default CreateArea;
