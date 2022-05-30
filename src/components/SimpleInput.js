import React, { useEffect, useState } from 'react';
import useInput from './useInput';

const SimpleInput = (props) => {

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurChangeHandler
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput(value => value.includes('@'));

  let formIsValid = false;
  if(enteredNameIsValid && enteredEmailIsValid){
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if(!enteredNameIsValid) {
      return
    }
  };

  const nameInputClasses =  nameInputHasError ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurChangeHandler}
        />
        {nameInputHasError && <p>Name must not be empty</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your email</label>
        <input
          type='email'
          id='email'
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailInputHasError && <p>Name must not be empty</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
















// import { useState, useRef } from "react";

// const SimpleInput = (props) => {
//   const [enteredName, setEnteredName] = useState('');
//   const inputNameRef = useRef('');
//   const [isValid, setIsValid] = useState(false);
//   const [enteredNameTouched, setEnteredNameTouched] = useState(false);



//   const nameInputChangeHandle = (e)=>{
//     setEnteredName(e.target.value);
//     // if(!enteredName.includes('@')){
//     //   setIsValid(true);
//     //   setEnteredNameTouched(true);
//     // }
//     // console.log(enteredName);
//   }

//   const nameInputBlurHandler = ()=>{
//     setEnteredNameTouched(true);
//     // if(enteredName.trim() === ''){
//     //   setIsValid(true);
//     //   return;
//     // }
//     // if(!enteredName.includes('@')){
//     //   setIsValid(true);
//     //   return;
//     // }
//     // setEnteredNameTouched(false);
//   }

//   const formSubmissionHandler = (e)=>{
//     e.preventDefault();
//     if(enteredName.trim() === ''){
//       setIsValid(true);
//       return ;
//     }
//     setIsValid(false);

//     // const enteredRefName = inputNameRef.current.value;

//     // console.log(enteredRefName);
//     // fetch request to server
//   }

//   const nameInputIsValid = isValid && enteredNameTouched;
//   const nameInputClasses = nameInputIsValid ? 'form-control invalid' : 'form-control';

//   return (
//     <form onSubmit={formSubmissionHandler}>
//       <div className={nameInputClasses}>
//         <label htmlFor='name'>Your Name</label>
//         <input type='text' id='name' 
//             ref={inputNameRef} 
//             onChange={nameInputChangeHandle}
//             onBlur={nameInputBlurHandler} 
//         />
//         {nameInputIsValid && <p>name must not be empty</p>}
//       </div>
//       <div className="form-actions">
//         <button>Submit</button>
//       </div>
//     </form>
//   );
// };

// export default SimpleInput;