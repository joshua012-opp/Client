import {useState} from 'react'
// import MyContext from "../../App";

export function Form() {

// const [UserDetail, setUserDetail] =useState("");
  const [color, setcolor] = useState("gray");
  // const cohortName = 

  return (
    <div style={{backgroundColor: color, padding: "20px", width:"500px", margin: "20px"}}>
        <form action="">
            <input 
            type="text" value={color}
            onChange={(e)=> setcolor(e.target.value)}/>
        </form>
        </div>
  )
}

export default Form

// import { useState } from 'react';

// export default function Form() {
//   const [UserDetail, setUserDetail] = useState("");
  
//   const [bgColor, setBgColor] = useState("white");


//   const toggleColor = () => {
//     setBgColor(prevColor => (prevColor === "white" ? "#f0f4f8" : "white"));
//   };

//   return (
//     <div 
//       style={{ 
//         backgroundColor: bgColor, 
//         padding: "20px", 
//         borderRadius: "8px",
//         transition: "background-color 0.3s ease" 
//       }}
//     >
//       <form onSubmit={(e) => e.preventDefault()}>
//         <input
//           type="text"
//           value={UserDetail}
//           onChange={(e) => setUserDetail(e.target.value)}
//         />
//       </form>
      
//       <p>Form</p>
//       <p>{UserDetail}</p>

//       {/* Button to trigger the background color change */}
//       <button type="button" onClick={toggleColor} style={{ marginTop: "10px" }}>
//         Change Background Color
//       </button>
//     </div>
//   );
// }