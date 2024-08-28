//functions
//arrow function
/*function DoSomething(){

}*/ //we do in js

//in react we use arrow funciton
/*export const tut = () => {
  return (
    <div>tut</div>
  )
}*/




//anamonous function
{/* <button
 onClick={()=>{
    console.log("hello");
 }}
>

</button> */}



//tanaryoperator
// let age = 16;

// let name = age>10 ? "pedro": "jack";
// console.log(name);


// const a=()=>{
//     return age>10 ? <div>Hello</div>: <div>Hy</div>
// }





// object
const person = {
    name:"pedro",
    age:20,
    isMarried: false
};

// const name= person.name;
// const age= person.age;
//instead we use
const {name,age,isMarried}= person;



//now must imp ... spread operator



const a={
    fname: "ram",
    age1: 1,
    isTrue:false
};
console.log(a);
//if name shyam but other same
const a2 = {...a, fname:"hari"}
console.log(a2);




//.map() .filter() 
// import React from 'react';

// const ItemList = ({ items }) => {
//   return (
//     <ul>
//       {items.map((item, index) => (
//         <li key={index}>{item}</li>
//       ))}
//     </ul>
//   );
// };

// const App = () => {
//   const fruits = ['Apple', 'Banana', 'Cherry'];

//   return (
//     <div>
//       <h1>Fruit List</h1>
//       <ItemList items={fruits} />
//     </div>
//   );
// };

// export default App;