import React, { useEffect, useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;


  useEffect(() => {
    if(enteredNameIsValid) {
      setFormIsValid(true)
    } else {
      setFormIsValid(false)
    }
  }, [enteredNameIsValid])

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true)
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true)
    if(!enteredNameIsValid) {
      return
    }
    setEnteredNameTouched(false)
  };

  const nameInputClasses =  nameInputIsInvalid ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          value={enteredName}
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {nameInputIsInvalid && <p>Name must not be empty</p>}
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