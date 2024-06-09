function HelloWorld(props) {
  const name = props.name;

  return (

    <>
    <div>
    <h1>Hello {props.name || "World"}</h1>
    {props.children}

    </div>
    
    
    </>
  );
}


export default HelloWorld;


//Alternative using conditon

// function HelloWorld(props) {
//   let name = props.name;
  
//   if (name === "") {
//     name = "World"
//   }

//   return (
//     <h1>Hello {name}</h1>
//   );
// }

// export default HelloWorld;

