import React,{ useState } from "react";

const useClock = () => {
  // TODO
  // refer readme.md for what to return
  const daten=new Date();
  let minute = daten.getMinutes();
  let hour = daten.getHours();
  let second = daten.getSeconds();
  
  const [hours,sethours] = useState(hour);
  const [minutes,setMinutes] = useState(minute);
  const [seconds,setSeconds] = useState(second);

  const updateTime = () =>{
    hour = daten.getHours();
    minute = daten.getMinutes();
    second = daten.getSeconds();
    setMinutes(minute);
    setSeconds(second);
    sethours(hour);
    
  }
  React.useEffect(()=>{
    setInterval(()=>{
    hour = daten.getHours();
    minute = daten.getMinutes();
    second = daten.getSeconds();
    setMinutes(minute);
    setSeconds(second);
    sethours(hour);
    },1000)
  },[])
  return {hour,second,minute}

};

export default useClock;
