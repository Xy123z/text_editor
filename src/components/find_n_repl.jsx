 import { useState } from 'react'
 export default function Functionality(props){
     const [word, setWord] = useState('')
     const [word1, setWord1] = useState('')
  const changeWord = (event) => {
    setWord(event.target.value);
  }
  const changeWord1 = (event) => {
    setWord1(event.target.value);
  }
  const countWord = (str,word) => {
      const words = str.toLowerCase().split(/\s+/)
      return words.filter( w => w === word.toLowerCase()).length
}
const replaceWord = (str,word1,word2) => {
  str.toLowerCase().replaceAll(word1.toLowerCase(),word2.toLowerCase())
}
     if(props.value === "no_of_occur"){

         return(
             <div className={`card ${props.mode === "dark" ? "text-bg-dark" : ""}`} style={{width: "18rem"}}>
  <div className="card-body">
    <h5 className="card-title mb-4">number of occurance</h5>
   <textarea className={`form-control bg-${props.mode === 'dark' ? 'dark' : 'light'}`} id="exampleFormControlTextarea1" rows="1" cols="10" placeholder="enter the word" value={word} onChange={changeWord}></textarea>
   <p className="card-text mt-4">{`number of occurance: ${countWord(props.textVal,word)}`}</p>
    <button type="button" className={`btn btn-outline-${props.mode === "dark" ? "light" : "dark"}`} onClick={() => {props.removeFunctionality('')}}>close</button>
  </div>
</div>
        )
    }
    else if(props.value === "find_n_replace"){
         return(
             <div className={`card ${props.mode === "dark" ? "text-bg-dark" : ""}`} style={{width: "18rem"}}>
  <div className="card-body">
    <h5 className="mb-4 card-title">find and replace</h5>
   <textarea className={`mb-4 form-control bg-${props.mode === 'dark' ? 'dark' : 'light'}`} id="exampleFormControlTextarea1" rows="1" cols="10" placeholder="enter the word to be replaced" value={word} onChange={changeWord}></textarea>
    <textarea className={`mb-4 form-control bg-${props.mode === 'dark' ? 'dark' : 'light'}`} id="exampleFormControlTextarea1" rows="1" cols="10" placeholder="enter the new word" value={word1} onChange={changeWord1}></textarea>
    <div className="d-flex ">
    <button type="button" className={`mt-4 btn btn-outline-${props.mode === "dark" ? "light" : "dark"}`} onClick={() => {replaceWord(props.textVal,word,word1)}}>submit</button>
  <button type="button" className={`ms-4 mt-4 btn btn-outline-${props.mode === "dark" ? "light" : "dark"}`} onClick={() => {props.removeFunctionality('')}}>close</button>
  </div>
  </div>
</div>
        )
    }
    else{
        return null
    }
}
