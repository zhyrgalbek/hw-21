import { useReducer } from "react"


function reducerEntered(prevState, action){
    if(action.type === 'ENTER_VALUE'){
        return {
            ...prevState,
            enteredValue: action.value
        }
    }
    if(action.type === 'BLUR'){
        return {
            ...prevState,
            isTouched: action.isTouched
        }
    }
}


function useInput(validateState){

    const [entered, dispatchEntered] = useReducer(reducerEntered, {
        enteredValue: '',
        isTouched: false
    })

    const valueIsValid = validateState(entered.enteredValue);
    const hasError = !valueIsValid && entered.isTouched;

    const valueChangeHandler = (e)=>{
        dispatchEntered({
            type: 'ENTER_VALUE',
            value: e.target.value,
        })
    }


    const inputBlurHandler = (e)=>{
        dispatchEntered({
            type: 'BLUR',
            isTouched: true,
        })
    }

    return {
        value: entered.enteredValue,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
    }
}

export default useInput;