import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TextArea from './components/textbox'
import NavBar from './components/navbar'
import About from './pages/about'
import Sidebar from './components/sidebar'
import Functionality from './components/find_n_repl'
import { Routes, Route } from "react-router-dom"
import 'bootstrap-icons/font/bootstrap-icons.css'
function App() {
  const [text, setText] = useState('')
  const [check, setCheck] = useState(false)
  const [mode, setMode] = useState("light");
  const [sidebar, showSidebar] = useState(false)
  const [functionality, setFunctionality] = useState('')
  const Title = () => {
    setCheck(!check);
    !check ? document.body.style.backgroundColor="black" : document.body.style.backgroundColor="white";
    !check ? setMode("dark") : setMode("light");
  }
  const changeText = (t) => {
    setText(t)
  }
  const toggleSide = () => {
    showSidebar(!sidebar)
  }
  const changeFunction = (func) => {
    setFunctionality(func)
  }
  return (
  <>
    <NavBar changeTitle={Title} isDarkMode={check} mode={mode}/>
    <div className="d-inline-flex p-2">
      <button
        className={`btn btn-outline-${mode === "dark" ? "light" : "dark"}`}
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
      >
        <i className="bi bi-justify"></i>
      </button>
    </div>
    <Sidebar mode={mode} addFunction={changeFunction}/>
    <div className="container my-3">
      <Routes>
        <Route path="/" element={<TextArea default={"enter some text here"} mode={mode} change={changeText}/>}/>
        <Route path="/about" element={<About mode={mode}/>}/>
      </Routes>
      <Functionality value={functionality} removeFunctionality={changeFunction} mode={mode} textVal={text}/>
    </div>
  </>
)
}

export default App
