import React, { useState, useRef } from "react";
import style from "./TopHeader.module.css";
import DescriptionIcon from "@mui/icons-material/Description";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import VideocamIcon from "@mui/icons-material/Videocam";
import { GrFormLock } from "react-icons/gr";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import RestoreOutlinedIcon from "@mui/icons-material/RestoreOutlined";
import {
  BiUndo,
  BiRedo,
  BiHighlight,
  BiCommentAdd,
  BiPencil,
} from "react-icons/bi";
import CollectionsIcon from "@mui/icons-material/Collections";
import { AiOutlinePrinter, AiOutlineFormatPainter } from "react-icons/ai";
import SpellcheckIcon from "@mui/icons-material/Spellcheck";
import { HiMinus, HiPlus } from "react-icons/hi";
import { HiListBullet } from "react-icons/hi2";
import { BsTypeBold } from "react-icons/bs";
import { RxFontItalic } from "react-icons/rx";
import {
  MdFormatUnderlined,
  MdOutlineFormatColorText,
  MdOutlineChecklistRtl,
  MdOutlineFormatListNumbered,
  MdKeyboardArrowUp,
  MdArrowDropUp,
  MdOutlineFormatAlignJustify,
} from "react-icons/md";
import {
  RiIndentDecrease,
  RiIndentIncrease,
  RiFormatClear,
  RiArrowDropDownFill,
} from "react-icons/ri";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import {
  CiTextAlignLeft,
  CiTextAlignCenter,
  CiTextAlignRight,
  CiTextAlignJustify,
} from "react-icons/ci";
import FormatLineSpacingIcon from "@mui/icons-material/FormatLineSpacing";

import { HiOutlineArrowLeft } from "react-icons/hi";
import SummaryBox from "../../organisms/Summary/SummaryBox";

export default function TopHeader() {
  const [input, setInput] = useState("");
  const [showSummary, setShowSummary] = useState(false);
  const [getSummary, setGetSummary] = useState("");
  const [font, setFont] = useState(11);
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [align, setAlign] = useState(false);
  const [textAlign, setTextAlign] = useState("");

  const inputRef = useRef();

  function undo() {
    inputRef.current.focus();
    document.execCommand("undo");
  }

  function redo() {
    inputRef.current.focus();
    document.execCommand("redo");
  }

  function updateSummary(summary) {
    setGetSummary(summary);
  }

  function showBox(e) {
    e.stopPropagation();
    setShowSummary(true);
  }

  function closeSummaryBox() {
    setShowSummary(false);
  }

  function InputChange(e) {
    setInput(e.target.value);
  }
  function increaseFontSize() {
    setFont((prevFont) => prevFont + 1);
  }

  function decreaseFontSize() {
    setFont((prevFont) => prevFont - 1);
  }
  function toggleBold() {
    setIsBold(!isBold);
  }

  function toggleItalic() {
    setIsItalic(!isItalic);
  }

  function toggleUnderline() {
    setIsUnderline(!isUnderline);
  }
  function handleTextAlign(textAlign) {
    setTextAlign(textAlign);
  }

  return (
    <>
      <div className={style.wrapper}>
        <div className={style.main_container}>
          <div>
            <DescriptionIcon
              sx={{ width: "3rem", height: "3rem", color: "blue" }}
            />
          </div>
          <div className={style.mid_container}>
            <div className={style.input}>
              <input type="button" value="Untitled document" />
              <StarOutlineIcon />
            </div>
            <div className={style.file_names}>
              <span>File</span>
              <span>Edit</span>
              <span>View</span>
              <span>Insert</span>
              <span>Format</span>
              <span>Tools</span>
              <span>Extension</span>
              <span>Help</span>
            </div>
          </div>
        </div>
        <div className={style.right_side}>
          <RestoreOutlinedIcon sx={{ fontSize: "2rem" }} />
          <InsertCommentIcon sx={{ fontSize: "2rem" }} />
          <VideocamIcon sx={{ fontSize: "2rem" }} />
          <div className={style.btn}>
            <GrFormLock />
            <p>Share</p>
          </div>
        </div>
      </div>
      <div className={style.second_nav}>
        <BiUndo className={style.undo_icon} onClick={undo} />
        <BiRedo className={style.redo_icon} onClick={redo} />
        <AiOutlinePrinter
          className={style.printer_icon}
          onClick={() => window.print()}
        />
        <SpellcheckIcon className={style.spell_check} />
        <AiOutlineFormatPainter className={style.format_painticon} />
        <select
          class="form-select"
          aria-label="100%"
          className={style.zoom_options}
        >
          <option>Fit</option>
          <option value="59%">50%</option>
          <option value="75%">75%</option>
          <option value="90%">90%</option>
          <option value="100%" selected>
            100%
          </option>
          <option value="125%">125%</option>
          <option value="150%">150%</option>
          <option value="200%">200%</option>
        </select>
        <input type="text" value="Normal Text" className={style.normal_text} />
        <input type="text" value="Arial" className={style.arial} />
        <span style={{ color: "rgb(199, 199, 199)" }}>|</span>
        <HiPlus onClick={increaseFontSize} />

        <select
          class="form-select"
          aria-label="100%"
          onChange={(e) => setFont(e.target.value)}
          value={font}
        >
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="14">14</option>
          <option value="18">18</option>
          <option value="24">24</option>
          <option value="30">30</option>
          <option value="36">36</option>
          <option value="48">48</option>
          <option value="60">60</option>
          <option value="72">72</option>
          <option value="96">96</option>
        </select>

        <HiMinus onClick={decreaseFontSize} />
        <span style={{ color: "rgb(199, 199, 199)" }}>|</span>
        <BsTypeBold className={style.bold} onClick={toggleBold} />
        <RxFontItalic className={style.italic} onClick={toggleItalic} />
        <MdFormatUnderlined
          className={style.underline}
          onClick={toggleUnderline}
        />
        <MdOutlineFormatColorText />
        <BiHighlight />
        <span style={{ color: "rgb(199, 199, 199)" }}>|</span>
        <InsertLinkIcon />
        <BiCommentAdd />
        <CollectionsIcon />
        <span style={{ color: "rgb(199, 199, 199)" }}>|</span>
        <div className={style.align_items}>
          <MdOutlineFormatAlignJustify
            onClick={() => setAlign(!align)}
            className={style.align_icons}
          />
          {align && (
            <div className={style.align} onClick={() => setAlign(false)}>
              <CiTextAlignLeft
                className={style.text_align}
                onClick={() => handleTextAlign("left")}
              />
              <CiTextAlignCenter
                className={style.text_align}
                onClick={() => handleTextAlign("center")}
              />
              <CiTextAlignRight
                className={style.text_align}
                onClick={() => handleTextAlign("right")}
              />
              <CiTextAlignJustify
                className={style.text_align}
                onClick={() => handleTextAlign("justify")}
              />
            </div>
          )}
        </div>
        <FormatLineSpacingIcon />
        <MdOutlineChecklistRtl />
        <HiListBullet />
        <MdOutlineFormatListNumbered />
        <RiIndentDecrease />
        <RiIndentIncrease />
        <RiFormatClear />

        <p className={style.editing}>
          <BiPencil />
          Editing <RiArrowDropDownFill />
        </p>
        <span style={{ color: "rgb(199, 199, 199)" }}>|</span>
        <MdKeyboardArrowUp />
      </div>
      <div className={style.wrapper_main}>
        <div className={style.left_section}>
          <HiOutlineArrowLeft className={style.left_icon} />
          {showSummary ? (
            <SummaryBox
              onclick={closeSummaryBox}
              updateSummary={updateSummary}
            />
          ) : (
            <div className={style.summary}>
              <p>Summary</p>
              <HiPlus className={style.plus_icon} onClick={showBox} />
            </div>
          )}
          <p>{getSummary}</p>
          <div className={style.outline}>
            <p>Outline</p>
            <div>
              <i>Headings that you add to the document will appear here</i>
            </div>
          </div>
        </div>
        <textarea
          ref={inputRef}
          className={style.middle_section}
          name=""
          id=""
          cols="100"
          rows="60"
          value={input}
          onChange={InputChange}
          style={{
            fontSize: `${font}px`,
            fontWeight: isBold ? "bold" : "normal",
            fontStyle: isItalic ? "italic" : "normal",
            textDecoration: isUnderline ? "underline" : "none",
            textAlign: textAlign,
          }}
        ></textarea>
      </div>
    </>
  );
}
