"use client"
import React, { useState } from 'react'

const page = () => {
  const[title,settitle]=useState("")
  const[dec,setdec]=useState("")
  const[mainArray,setmainArray]=useState([])
  const submit=(e)=>{
    e.preventDefault()
    setmainArray([...mainArray,{title, dec}]);
    settitle("");
    setdec("");
  }
  const deletelist=(i)=>{
    let copytask=[...mainArray];
    copytask.splice(i,1);
    setmainArray(copytask);
  }
let renderTask=<h2>No Task Available</h2>
if(mainArray.length>0){
  renderTask=mainArray.map((t,i)=>{
    return(
        <li key={i} >
          <h5>{t.title}</h5>
          <h2>{t.dec}</h2>

              <button
              onClick={()=>{
                deletelist(i)
              }}
               id='delete'>DELETE</button>
          
        </li>
    );
  });
}
  return (
    <>
    <h1>ToDo list</h1>
    <form onSubmit={submit}>
      <input type='text' 
      className='text-2xl border-zinc-800  m-5 px-4 py-2 '
      placeholder='Enter Your Text Here'
      value={title}
      onChange={(e)=>{
          settitle(e.target.value)
      }}/>
      
      <input type='text' 
      className='text-2xl border-zinc-800  m-5 px-4 py-2 '
      placeholder='Enter Description Here'
      value={dec}
      onChange={(e)=>{
          setdec(e.target.value)
      }}/>
      <button id='add'>ADD TASK</button>
           
    </form>
    <div className="bg-slate-300 p-8">
        <ul>{renderTask}</ul>
    </div>
    </>
  )
}

export default page
