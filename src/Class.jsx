// import React from "react";

// const App = () => {
//   let marks = 60;
//   return (
//     <>
//       {(() => {
//         if (marks >= 80 && marks < 101) {
//           return <h1> A+ </h1>;
//         } else if (marks >= 70 && marks < 80) {
//           return <h1> A </h1>;
//         } els if (marks >= 50 e if (marks >= 60 && marks < 70) {
//           return <h1> A- </h1>;
//         } else&& marks < 60) {
//           return <h1> B </h1>;
//         } else {
//           return <h1>F</h1>;
//         }
//       })()}
//     </>
//   );
// };

// export default App;










////////////
// import React from "react";

// const App = () => {
//   const city = ["Delhi", "Mumbai", "Banglore", "Chennai", "Kolkata"];
//   return (
//     <>
//       <ul>
//         {city.map((item, i) => {
//           return <li key={i.toString}>{item}</li>;
//         })}
//       </ul>
//     </>
//   );
// };
// export default App;

/// rendaring
// const LoginStatus=(status)=>{
//  if (status){
//   return <button>Logout Btn</button>
//  }
//  else{
//   return <button>Login btn</button>
//  }
// }
// const App = () => {

//   return (
//     <>
//     <h1> Login status</h1>
//     {LoginStatus(true)}

//     </>
//   )
// }

// export default App



//////////////////

// const App = () => {

// const status=true;

//  switch (status){
//   case true:
//     return <h1>Logout</h1>
//   case false:
//     return <h1>Login</h1>
//   default:
//     return <h1>Unknown</h1>
//  }
// }

// export default App
/////


// import React from 'react'

// const App = () => {
//   let marks =10;
//   return (
//     <div>
//     {
//       marks>80?
//       <h1>Brilliant Result</h1>
//       :
//       <h1>Abarage Result</h1>
//     }


//     </div>
//   )
// }

// export default App

///////////




// import React from 'react'

// const App = () => {
//   let status =false;
//   return (
//     <div>
//     {(()=>{
//     if (status==true){
//       return <button>Logout button</button>
//     }else{
//       return <button>Login button</button>
//     }
//     })()}

//     </div>
//   )
// }
// export default App




// import React, { useRef } from 'react'

// const App = () => {
//   let myheadline= useRef();
//   const BtnClick=()=>{
//     myheadline.current.innerText="hello world"
//   }
//   return (
//     <div>
//  <h1 ref={myheadline}>  </h1>
//   <button onClick={BtnClick}>submit</button>
//     </div>
//   )
// }

// export default App