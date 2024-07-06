import { useState } from "react";
import "./Sim.css";

function Task() {
  let [num, setNum] = useState(10);

  const addFunc = () => {
    if(num>=20){
        alert("Number can not be greater than 20");
    }else{
        setNum(num + 1);
    }
    console.log(`button clicked ${num}`);
  };

  const removeFunc = () => {
    if(num<=0){
        alert("Number can not be less than 0");
    }else{
        setNum(num - 1);
    }
    console.log(`button clicked ${num}`);
  };

  return (
    <div className="Container">
      <h1>Welcome to dummy project</h1>
      <h2>this is a dummy task</h2>
      <br />
      <h2>click buttons to add or remove number {num}</h2>
      <br />
      <button  className="btn btn-dark" onClick={addFunc}>
        Add
      </button>
      <br />
      <button type="button" className="btn btn-dark" onClick={removeFunc}>
        Remove
      </button>
    </div>
  );
}

export default Task;
