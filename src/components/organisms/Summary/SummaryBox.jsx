import React,{useState} from "react";
import style from "./SummaryBox.module.css";
import { RxCross2 } from "react-icons/rx";
export default function SummaryBox({ onclick,updateSummary }) {
    const [input,setInput]=useState('')
    function getInput(e){
        setInput(e.target.value)
        updateSummary(e.target.value)
    }
  return (
    <div className={style.summary_box}>
      <input
        type="text"
        placeholder="Enter your document summary here"
        value={input}
        onChange={getInput}
      />
      <RxCross2 onClick={onclick} className={style.cross}/>
    </div>
  );
}