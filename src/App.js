//import Area
import { useState } from "react"
import  './App.css';
 export default function App(){
    //state
   const [result,setResult] = useState("");
   
    //function
        let clickHandleFunction = (e) => {
          // console.log('claear button click');
          setResult(result.concat(e.target.value));
          
      }
      let clearFunction = ()=>{
        setResult("");
      }
      let calculateFun = ()=>{
        let evald = eval(result).toString();
        setResult(evald);
      }

    //return statement

  return ( 
    <div className="m-3 rounded-bottom-3">
    <input type="text" value={result} className="m-2" placeholder="0"/>
   
    <div >
        
        <input type="button" onClick={clickHandleFunction} value="1" className="m-1 text-center" />
        <input type="button" onClick={clickHandleFunction} value="2" className="m-1 text-center"/>
        <input type="button" onClick={clickHandleFunction} value="3" className="m-1 text-center"/>
        <input type="button" onClick={clickHandleFunction} value="4" className="m-1 text-center"/>
        <br></br>
        <input type="button" onClick={clickHandleFunction} value="5" className="m-1 text-center"/>
        <input type="button" onClick={clickHandleFunction} value="6" className="m-1 text-center"/>
        <input type="button" onClick={clickHandleFunction} value="7" className="m-1 text-center"/>
        <input type="button" onClick={clickHandleFunction} value="8" className="m-1 text-center"/>
        <br></br>
        <input type="button" onClick={clickHandleFunction} value="9" className="m-1 text-center"/>
        <input type="button" onClick={clickHandleFunction} value="0" className="m-1 text-center"/>
        <input type="button" onClick={clickHandleFunction} value="+" className="m-1 text-center"/>
        <input type="button" onClick={clickHandleFunction} value="-" className="m-1 text-center"/>
     
        <br></br>
        <input type="button" onClick={clickHandleFunction} value="*" className="m-1 text-center"/>
        <input type="button" onClick={clickHandleFunction} value="/" className="m-1 text-center"/>
        <input type="button" onClick={clearFunction} value="c" className="m-1 text-center"/>
        <input type="button" onClick={calculateFun} value="=" className="m-1 text-center" />
    </div>
    </div>
  );
}
