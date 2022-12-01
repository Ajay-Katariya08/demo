import "./App.css";
import "./style.css"
import React, { useState } from "react";

function App() {
  const [Val, SetVal] = useState("");
  const backspace=()=>{
	try{
		SetVal(Val.slice(0,-1));
	}
	catch{
		SetVal("");
	}
  }
  const space=()=>{
	try{
		SetVal("");
	}
	catch{
		SetVal("");
	}
  }
  const Ans=()=>{
	try{
		SetVal(eval(Val))
	}
	catch(error){
		SetVal("error")
	}
  }

 
  return (
    <div class="calc_set">
	<div class="calc">
		<div class="text_box">
			<input type="text" value={Val} name=""class="align"></input>
		</div>

		<div class="calc_btn btn_padding">
				<input type="button" onClick={(e)=>space()} value="c" class="calc_bt" ></input>
				<input type="button"  class="calc_bt" onClick={(e)=>backspace()} value="X"></input>
				<input type="button"  class="calc_bt" onClick={(e)=>SetVal(Val+e.target.value)} value="/"></input>
				<input type="button"  class="calc_bt" onClick={(e)=>SetVal(Val+e.target.value)} value="*"></input>

		</div>

		<div class="calc_btn">
				<input type="button" onClick={(e)=>SetVal(Val+e.target.value)} value="1" class="calc_bt"></input>
				<input type="button" onClick={(e)=>SetVal(Val+e.target.value)} value="2" class="calc_bt"></input>
				<input type="button" onClick={(e)=>SetVal(Val+e.target.value)} value="3"  class="calc_bt"></input>
				<input type="button" onClick={(e)=>SetVal(Val+e.target.value)} value="+" class="calc_bt"></input>

		</div>

		<div class="calc_btn">
				<input type="button" onClick={(e)=>SetVal(Val+e.target.value)} value="4"  class="calc_bt"></input>
				<input type="button" onClick={(e)=>SetVal(Val+e.target.value)} value="5"  class="calc_bt"></input>
				<input type="button" onClick={(e)=>SetVal(Val+e.target.value)} value="6"  class="calc_bt"></input>
				<input type="button" onClick={(e)=>SetVal(Val+e.target.value)} value="-"  class="calc_bt"></input>

		</div>

		<div class="calc_btn">
				<input type="button" onClick={(e)=>SetVal(Val+e.target.value)} value="7" class="calc_bt"></input>
				<input type="button" onClick={(e)=>SetVal(Val+e.target.value)} value="8" class="calc_bt"></input>
				<input type="button" onClick={(e)=>SetVal(Val+e.target.value)} value="9" class="calc_bt"></input>
				<input type="button" onClick={(e)=>SetVal(Val+e.target.value)} value="" class="calc_bt"></input>

		</div>
		<div class="calc_btn">
				<input type="button" onClick={(e)=>SetVal(Val+e.target.value)} value="0"  class="calc_bt"></input>
				<input type="button" onClick={(e)=>SetVal(Val+e.target.value)} value="00" class="calc_bt"></input>
				<input type="button" onClick={(e)=>SetVal(Val+e.target.value)} value="." class="calc_bt"></input>
				<input type="button" value="=" onClick={(e)=>Ans()} class="calc_bt"></input>

		</div>
	</div>
	</div>
  );
}

export default App;
