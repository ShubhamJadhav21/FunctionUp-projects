import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import style from "./SignUp.module.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Modal from "@mui/material/Modal";
import { BsXLg } from "react-icons/bs";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [day, setDay] = useState("");
  const [open, setOpen] = useState(false);
  const [close,setClose] =useState(false)

  useEffect(() => {
    modalOpen();
    
  },[close]);
  const modalOpen = () => {
    setOpen(true);
  };
  const handleClose = () =>{
    setOpen(false)
  }

  const getName = (e) => {
    setName(e.target.value);
  };

  const getPhone = (e) => {
    setPhone(e.target.value);
  };

  const getEmail = (e) => {
    setEmail(e.target.value);
  };

  const getMonth = (event) => {
    setMonth(event.target.value);
  };
  const getYear = (e) => {
    setYear(e.target.value);
  };
  const getDay = (e) => {
    setDay(e.target.value);
  };
  

  const getUserData = (e) => {
    e.preventDefault();
    const nameRegex = /^[A-Za-z\s-]{2,}$/;
    const phoneRegex = /^[\d\s-]{7,15}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(name)) {
      setNameError("Please Enter Valid Name");
    } else if (!phoneRegex.test(phone)) {
      setPhoneError("Please Enter Valid Phone");
    } else if (!emailRegex.test(email)) {
      setEmailError("Please Enter Valid Email");
    } else {
      const dateOfBirth = new Date(year, month - 1, day);
      const userData = { name, phone, email, dob: dateOfBirth.toISOString() };
      localStorage.setItem("userData", JSON.stringify(userData));
      setName("");
      setPhone("");
      setEmail("");
      setDob("");
    }
  };

  return (
    <Modal
      open={open}
      onClose={close}
      aria-labelledby="registration-modal-title"
      aria-describedby="registration-modal-description"
    >
      <div className={style.Container}>
        <span>
          
          <BsXLg className={style.crossIcon} onClick={handleClose}/>
          <span className={style.wrapperCrossIcon}>Step 1 of 5</span>
        </span>
        <form action="" className={style.wrapper} onSubmit={getUserData}>
          <h2 className={style.heading}>Create your account</h2>

          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            className={style.Name}
            value={name}
            onChange={getName}
            size="medium"
             sx={{width:'25rem'}}
          />
          {nameError && <span className={style.error}>{nameError}</span>}

          <br />

          <TextField
            id="outlined-basic"
            label="Phone"
            variant="outlined"
            className={style.Email}
            value={phone}
            onChange={getPhone}
            size="medium"
            sx={{ width: "25rem" }}
          />
          {phoneError && <span className={style.error}>{phoneError}</span>}

          <br />

          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            className={style.Phone}
            value={email}
            onChange={getEmail}
            sx={{ width: "25rem" }}
          />
          {emailError && <span className={style.error}>{emailError}</span>}

          <br />
          <h6 className={style.headingDob}>Date of Birth</h6>
          <div className={style.text}>
          This will not be shown publicly. Confirm your own age, even if this
          account is for a business, a pet, or something else.
        </div>
          
          <div className={style.container}>
            <FormControl>
              <InputLabel>Month</InputLabel>
              <Select
                value={month}
                onChange={getMonth}
                style={{ minWidth: "200px" }}
              >
                {Array.from(Array(12), (_, i) => i + 1).map((month) => (
                  <MenuItem key={month} value={month}>
                    {new Date(0, month).toLocaleString("default", {
                      month: "long",
                    })}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel>Day</InputLabel>
              <Select
                value={day}
                onChange={getDay}
                style={{ minWidth: "80px" }}
              >
                {Array.from(Array(31), (_, i) => i + 1).map((day) => (
                  <MenuItem key={day} value={day}>
                    {day}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl>
              <InputLabel>Year</InputLabel>
              <Select
                value={year}
                onChange={getYear}
                style={{ minWidth: "80px" }}
              >
                {Array.from(Array(121), (_, i) => 2023 - i).map((year) => (
                  <MenuItem key={year} value={year}>
                    {year}
                  </MenuItem>
                ))}
              </Select>
                
            </FormControl>
          </div>
          <button className={style.nextBtn}>Next</button>
        </form>
      </div>
    </Modal>
  );
};

export default SignUp;