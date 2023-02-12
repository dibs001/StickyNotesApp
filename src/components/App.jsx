import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes,setNotes]=useState([]);
  function addNote(note){
    setNotes(prevNotes=>{
      return [...prevNotes,note];
    });
  }
  function onDelete(id){
    setNotes(prevNotes=>{
      return prevNotes.filter((note,index)=> index!==id);
    });
  }
  return (
    <div>
      <Header />
      <CreateArea addNote={addNote}/>

      {notes.map((note,index)=>{
        return <Note  
        key={index} 
        id={index} 
        deleteNote={onDelete} 
        title={note.title} 
        content={note.content} />
      })}
      <Footer />
    </div>
  );
  }
export default App;