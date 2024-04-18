import React from "react";

const Hello = () =>{
    // Using JSX
//     return (
//         <div className = 'dummyCass>
//             <h1> Hello from Ankush</h1>
//         </div>
//     )

// Without using JSX
return React.createElement(
    'div',
    {id: 'hello', className: 'dummyClass'},


        React.createElement('div', /* Additiona Property */null, /* Children for HTML element(div tag) */ React.createElement('h1',null, 'Hello from Ankush') )
)
    }

export default Hello