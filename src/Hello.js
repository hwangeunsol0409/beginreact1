import React from "react";
function Hello({color, age, name, isSpecial}) {
    return(
        <div style={{color:color}}>
            { isSpecial ? <b>***</b> : null}
            안녕하세요 {name}
            <h2>{age}</h2>
        </div>
    )
} 
//컴포넌트 내보내기
export default Hello;