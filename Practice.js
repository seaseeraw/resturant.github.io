import React,{useState} from "react";
const Practice = () =>{
 const[result,setResult]=useState(0); 
 const[isDisabled,setIsDisabled]=useState(true);
    const[keyword,setWord]=useState('');
    function increase(){
        if(result>0){
            setIsDisabled(false);
        }
        setResult(result+1);
        console.log("Result increase is" + result + "" + isDisabled);
    }
    function decrease(){
        if(result===0){
            setIsDisabled(true);
            return;
        }
        if(result>0){
            setIsDisabled(false);
        }
        setResult(result-1);
        console.log("Result decrease is" + result + "" + isDisabled);
    }
   function getWord(){
 fetch('https://api.dictionaryapi.dev/api/v2/entries/en/hello' + keyword)
 .then((response)=>response.json())
 .then((data)=>setWord(data[0].word))
    }
    return(
        <>
        <div>
            <p>Practice</p>
            <button onClick={increase}>+</button>
            <button disabled={isDisabled} onClick={decrease}>-</button>
            <span>{result}</span>
            <br/>
         <input
        name='word'
        type="text"
        id="input-text-word"
        required
        value={keyword}
        onChange={(e)=>setWord(e.target.value)}
        />
       <button onClick={getWord}>Get</button>
       <span>Word</span>
       </div>
       </>
    )
}

export default Practice;