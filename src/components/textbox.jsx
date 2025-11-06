 import { useState, useEffect} from 'react'
 import Analytics from './analytics'
 import Alert from './alerts'
 export default function TextArea(props){
     const [value, setValue] = useState('')
     const [caseBtnState, setCaseBtnState] = useState(false)
     const [copy, setCopy] = useState(false)
     const [alertType, setAlertType] = useState('')
     useEffect(() => {props.change(value)} , [value])
     const changeValue = (event) => {
         setValue(event.target.value);
    }
    const clearText = () => {
        setValue('');
        setCopy(true);
      setAlertType("clear");
      setTimeout(() => {setCopy(false);
        setAlertType('');
      } , 2000);
    }
    const toUpperCase = () => {
      if(!caseBtnState){
          setCaseBtnState(!caseBtnState)
          setValue(value.toUpperCase())
          setCopy(true);
      setAlertType("uppercase");
      setTimeout(() => {setCopy(false);
        setAlertType('');
      } , 2000);
    }
    else{
        setCaseBtnState(!caseBtnState)
          setValue(value.toLowerCase())
          setCopy(true);
      setAlertType("lowercase");
      setTimeout(() => {setCopy(false);
        setAlertType('');
      } , 2000);
    }
    }
    const cleanText = () => {
      setValue(value.trim().replace(/\s+/g, ' '));
      setCopy(true);
      setAlertType("remove");
      setTimeout(() => {setCopy(false);
        setAlertType('');
      } , 2000);
    }
    const handleCopy = async () => {
      try{
      await navigator.clipboard.writeText(value);
      setCopy(true);
      setAlertType("success");
      setTimeout(() => {setCopy(false);
        setAlertType('');
      } , 2000);
      }
      catch (err) {
        console.log("couldn't copy: ",err);
        setAlertType("failure");
        setTimeout(() => {
        setAlertType('');
        } , 2000);
      }
    }
     return(
         <>
         <Alert type={alertType} mode={props.mode}/>
<div className="container">
  <h1 htmlFor="exampleFormControlTextarea1" className={`text-start mb-4 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>Example textarea</h1>
  <textarea className={`form-control bg-${props.mode === 'dark' ? 'dark' : 'light'}`} id="exampleFormControlTextarea1" rows="6" cols="40" value={value} onChange={changeValue} placeholder={props.default}></textarea>
</div>
<div className="container mt-4 d-flex justify-content-start">
<div className="btn-group " role="group" >
  <button type="button" className="btn btn-primary border-end border-1 border-white" onClick={toUpperCase}>{(!caseBtnState ) ? "Convert to upper case" : "Convert to lower case"}</button>
  <button type="button" className="btn btn-primary border-end border-1 border-white border-start border-1 border-white" onClick={cleanText}>remove extra space</button>
  <button type="button" className="btn btn-primary border-end border-1 border-white border-start border-1 border-white" onClick={handleCopy}>{copy ? "copied" : "copy text"}</button>
  <button type="button" className="btn btn-primary border-start border-1 border-white" onClick={clearText}>clear</button>
</div>
</div>
<div className="container mt-4">
<Analytics value={value} mode={props.mode}/>
</div>
</>
    )
}
