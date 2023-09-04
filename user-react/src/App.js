import { useEffect, useRef, useState } from 'react';
import './App.css';
import UserList from './Components/UserList';
import CreateUser from './Components/CreateUser';

function App() {
  //유저항목을 나타내는 앱
  const [users, setUsers] = useState([
  {
    id: 1,
    username: 'green',
    email : 'green@naver.com',
    active: false
  },
  {
    id: 2,
    username: 'blue',
    email : 'blue@naver.com',
    active: false
  },
  {
    id: 3,
    username: 'yellow',
    email : 'yellow@naver.com',
    active: false
  }
]);
//input 입력 값을 상태관리
const [inputs, setInputs] = useState({
  username: "",
  email: ""
});
//구조분해할당
const {username, email} = inputs;
const onChange = e => {
  const {name, value} = e.target;
  setInputs({
    ...inputs,
    [name]: value
  })
}
const nextId = useRef(4);
const onCreate = () => {
  //users배열에 객체를 추가하기
  setUsers([
    ...users,  //원래 있던거 뿌려주고
    {id:nextId.current, username: username, email: email, active:false} //뒤에 하나 추가해주는 것.
  ])
  setInputs({
    username:"",
    email:""
  })
  nextId.current += 1;
}
const onRemove = (id) => {
  setUsers(users.filter(user => user.id !== id))
}
const onToggle = (id) => {
  setUsers(users.map(user => user.id === id ? {...user, active: !user.active} : user))
}
useEffect(() => {
  console.log("렌더링 되었습니다.");
}, [])
return(
  <div className="App">
   {/* {onChange=function, username="", email="", onCreate=function}*/}
    <CreateUser onChange={onChange} username={username} email={email} onCreate={onCreate}/>
     {/*{users: []} props.users */}
    <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
  </div>
)
}

export default App;
