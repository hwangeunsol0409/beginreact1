import React, { useState } from "react";
function InputSample(){
    //객체형태로 상태관리하기
    const [inputs, setInputs] = useState({
        name: "",
        nickname: ""
    });
    //구조분해 할당 각각 변수에 값 저장
    const {name, nickname} = inputs;
    const onChange = (e) => {
       const{name, value} = e.target;
       setInputs({
        ...inputs, //기존의 객체를 그대로 덮어씌움
        [name] : value //name키를 가진 값을 value로 변경(덮어 씌어진다.)
       })
    }
    const onReset = () => {
        setInputs({
            name:"",
            nickname:""
        })
    }
    return(
        <div>
            <input onChange={onChange} placeholder="이름" name="name" value={name}/>
            <input onChange={onChange} placeholder="닉네임" name="nickname" value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 :  </b>
                {name} ({nickname})
            </div>
        </div>
    )
}
export default InputSample;