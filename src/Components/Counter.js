import React, { useState } from "react";
function Counter() {
    //useState(상태의 초기값)
    //--> 배열 [상태, setter함수]
    const [number, setNumber] = useState(0)
    //const stateArray = useState(0)
    //const number = stateArray[0];
    //const setNumber = stateArray[1];
  
    const onIncrease = () =>{
        setNumber(number+1);
        console.log("number 값은 : " + (number+1));
    }
    const onDecrease = () =>{
        setNumber(number-1);
        console.log("number 값은 : " + (number-1));
    }
    return(
        <div>
            <h2>{number}</h2>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}
export default Counter;