import { useRef, useState} from 'react';
import './App.css';
import UserList from './Components/UserList';
function App() {
 const[statenum, setStateNum] = useState(1);
 const refnum = useRef(1);
 const nameInput = useRef();
 let varnum = 1;
 const addStateNum = () => {
  setStateNum(statenum+1);
  console.log(statenum);
 }
  const addRefNum = () => {
  refnum.current = refnum.current + 1;
  console.log(refnum.current);
 }
  const addVarNum = () => {
  varnum = (varnum+1);
  console.log(varnum);
 }
 const inputFocus = () => {
  nameInput.current.focus();
 }
 return(
  <div className="App">
    <UserList/>

     <div>
        <p>
          <input name="name" ref={nameInput}/>
          <input name="nickname"/>
          <button onClick={inputFocus}>클릭하세요</button>
        </p>
        <p>state : {statenum}</p>
        <p>ref : {refnum.current}</p>
        <p>varnum : {varnum}</p>
        <p>
          <button onClick={addStateNum}>state+1</button>
          <button onClick={addRefNum}>refnum.current+1</button>
          <button onClick={addVarNum}>varnum+1</button>
        </p>
     </div>
  </div>
 );
}
export default App;
