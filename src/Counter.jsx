import {useState} from 'react';
 
export default function Counter(){
    const [count,setCount]=useState(0);
    const [value,setValue]=useState("type here!!!")
    return(
    <>
        <input type="text"
        value={value}
        onChange={e=>{setValue(e.target.value)}}
        />
        <p>You type {value.length} chars</p>
        <p>You clicked {count} times</p>
        <button onClick={()=>setCount(count+1)}>Click me !</button>
        <br/>
        <button onClick={()=>setCount(0)}>Reset !</button>
        <hr/>
    </>);
}