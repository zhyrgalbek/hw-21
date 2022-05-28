import { useReducer, useEffect } from "react";

function reducerName(prevState, action) {
  if (action.type === 'VALIDNAME') {
    let isValid = false;
    if (action.value.search(/[^a-zA-Z]+/) !== -1 || action.value === '') {
      isValid = true;
    } else {
      isValid = false;
    }
    return {
      ...prevState,
      name: action.value,
      isValidName: isValid
    }
  }
  if (action.type === 'VALID_LASTNAME') {
    let isValid = false;
    if (action.value.search(/[^a-zA-Z]+/) !== -1 || action.value === '') {
      isValid = true;
    } else {
      isValid = false;
    }
    return {
      ...prevState,
      lastName: action.value,
      isValidLastName: isValid
    }
  }
  if (action.type === 'EMAIL' || action.value === '') {
    let isValid = false;
    if (action.value.includes('@')) {
      isValid = false;
    } else {
      isValid = true;
    }
    return {
      ...prevState,
      email: action.value,
      isValidEmail: isValid
    }
  }
  if (action.type === 'DISABLED') {
    let isValid = true;
    if (
      prevState.isValidName !== true && 
      prevState.isValidLastName !== true && 
      prevState.isValidEmail !== true &&
      prevState.name !== '' &&
      prevState.lastName !== '' &&
      prevState.email !== ''
      ) {
      isValid = false;
    }
    return {
      ...prevState,
      submitDisabled: isValid
    }
  }
  return {
    ...prevState
  }
}

const BasicForm = (props) => {

  const [inputName, dispatchName] = useReducer(reducerName, {
    name: '',
    isValidName: false,
    lastName: '',
    isValidLastName: false,
    email: '',
    isValidEmail: false,
    submitDisabled: true
  })

  const inputNameHandleChange = (e) => {
    dispatchName({
      type: 'VALIDNAME',
      value: e.target.value
    })
  }

  const inputLastNameHandleChange = (e) => {
    dispatchName({
      type: 'VALID_LASTNAME',
      value: e.target.value
    })
  }

  const inputEmailHandleChange = (e) => {
    dispatchName({
      type: 'EMAIL',
      value: e.target.value
    })
  }

  useEffect(() => {
    dispatchName({
      type: 'DISABLED'
    })
  }, [inputName.name, inputName.lastName, inputName.email]);

  let isValidInput = inputName.isValidName ? 'form-control invalid' : 'form-control';
  let isValidlastNameInput = inputName.isValidLastName ? 'form-control invalid' : 'form-control';
  let isValidEmailInput = inputName.isValidEmail ? 'form-control invalid' : 'form-control';

  return (
    <form>
      <div className='control-group'>
        <div className={isValidInput}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' onChange={inputNameHandleChange} />
        </div>
        <div className={isValidlastNameInput}>
          <label htmlFor='lastname'>Last Name</label>
          <input type='text' id='lastname' onChange={inputLastNameHandleChange} />
        </div>
      </div>
      <div className={isValidEmailInput}>
        <label htmlFor='email'>E-Mail Address</label>
        <input type='email' id='email' onChange={inputEmailHandleChange} />
      </div>
      <div className='form-actions'>
        <input type='submit' value="Submit" disabled={inputName.submitDisabled} />
        {/* <button>Submit</button> */}
      </div>
    </form>
  );
};

export default BasicForm;