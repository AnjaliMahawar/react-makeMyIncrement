import React, { useState } from "react";
import { ReactDOM } from "react";


 export default function Comp(){
// state
const[y,setY]=useState(40000);
//function
let increment=()=>{

    setY(y+10000)
    
}

//return 
    return<>
    <h1>make increment {y}</h1>
    <button onClick={()=>{increment()}}>make My increment  </button>
    </>
        
    
}