import './App.css';
import { useEffect, useState } from 'react';

function App() {
const [user, setState] = useState()

useEffect(() => {
    setState(generateUsers(usersArray))
},[usersArray.length])

const removeName = () => {
  setState(removeRandomUser(usersArray))
}  

return (
    <div className="App">
      <title>დარჩენილია {usersArray.length} იუზერები</title>
      <div>{user}</div>
      <button className='remove' onClick={removeName}>Remove user</button>
    </div>
  );
}
const usersArray = [
 {name:"მარი",id: 1,},
 {name: "ნინო",id: 2,},
 {name:"ვახო",id: 3,},
 {name:"გენადი",id: 4,},
 {name:"თაზო",id: 5,},
 {name:"ბექა",id: 6,},
 {name: "გიორგი",id: 7,},
 {name: "ლუკა",id: 8,},
 {name:"ზურა",id: 9,},
 {name:"ანა",id: 10,}
]

const generateUsers = (array) => {
  return array.map(users =>{
    const {name,id} = users
    return (<p key={id}>{name}</p>)
  })
} 

const removeRandomUser = (array) => {
   if(array.length > 0){
      const random = Math.floor(Math.random() * array.length);
      array.splice(random, 1);
   }
};
export default App;