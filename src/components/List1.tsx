// import React from "react";
import React,{useState} from "react";
import useNumberList from '../hooks/useNumberList';

type List1Props = {
  // TODO
  initialValues:number[];
  label:string;
};
const List1 = (props: List1Props) => {
  const [value,setValue]=useState<number>()
  const{list,appendStart,appendEnd,popStart,popEnd,clear,reset}=useNumberList(props.initialValues); 
  const handleChange=(e:any)=>{
   setValue(Number(e.target.value));
  }
  return (
    <div data-testid="list1">
      <h3 data-testid="list1-label">{/* Label */}{props.label}</h3>
      {/* Iterate List and wrap the element div below inside */}
      {list().map((elm:number)=>{
   return <div data-testid="list1-element">{elm}</div>
      })}
      <div data-testid="list1-element">{/* Each element in a list */}</div>
      

      
      <input data-testid="list1-input" onChange={handleChange} />
      <button data-testid="list1-btn-append-start" onClick={(el)=>{
        value && appendStart(value)
      }}>
        {/* Append to start of list btn */}
      </button>
      <button data-testid="list1-btn-pop-end" onClick={(el)=>popEnd()} >
        {/* po last element btn */}
      </button>
      <button data-testid="list1-btn-clear"onClick={(el)=>clear()}>
        {/* clear list and set empty button */}
      </button>
      <button data-testid="list1-btn-reset"onClick={(el)=>reset()}>
        {/* Reset list to default value btn */}
      </button>
    </div>
  );
};

export default List1;
