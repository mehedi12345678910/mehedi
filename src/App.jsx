// import Demo from "./Demo"



// const App = () => {   
// const BtnClick=()=>{
//   alert("say hello !")
// }
//   return (
//     <>
//     <Demo  ChildBtnClick= {BtnClick}/>

//     </>
//   ) 
// }
 
// export default App
//////////////////

// import React, { useRef } from 'react'

// const App = () => {
//   let myheadline= useRef();
//   const BtnClick=()=>{
//    myheadline.current.src="https://placehold.co/600x400?text=Hello+World"
//     myheadline.current.style.width="100px"
//     myheadline.current.style.height="100px"
//     myheadline.current.style.padding="20%"
   
//   }
//   return (
//     <div>
// <img ref={myheadline} src="https://placehold.co/600x400" alt="" />
//   <button onClick={BtnClick}>submit</button>
//     </div>
//   )
// }

// export default App
 


//////////
// import React, { useRef } from 'react'

// const App = () => {
//   let FirstName=useRef();
//   let LastName=useRef();

//   const change =()=>{
// let First=FirstName.current.value;
// let Last=LastName.current.value;
// alert(First + ""+ Last)
// }
//   return (
//     <div>

// <input ref={FirstName} placeholder='First Name' />
// <input ref={LastName}  placeholder='Last Name' />
// <button onClick={change}>Click</button>

//     </div>
//   )
// }

// export default App

import React, { useRef } from 'react'
const App = () => {
    let fast=useRef();
    let last=useRef();
    const change=()=>{
        let F=fast.current.value;
        let L=last.current.value;
       

         
    }
    
  return (
    <div>
        <h1 ref={fast}></h1>
      
   <input ref={fast} />
   <input ref={last} />
   <button onClick={change}>click</button>
    </div>
  )
}

export default App

/////
// import React, { useRef } from 'react'

// const App = () => {
//   let FirstName,LastName=useRef();

//   const change =()=>{
// let First=FirstName.value;
// let Last=LastName.value;
// alert(First + ""+ Last)
// }
//   return (
//     <div>

// <input ref={(a)=>FirstName=a} placeholder='First Name' />
// <input ref={(a)=>LastName=a}  placeholder='Last Name' />
// <button onClick={change}>Click</button>

//     </div>
//   )
// }

// export default App