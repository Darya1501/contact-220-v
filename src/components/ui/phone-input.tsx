import React, { ChangeEvent, ClipboardEvent, ForwardedRef, forwardRef, KeyboardEvent } from 'react'
import styles from "./ui.module.css"

type TPhoneInputProps = {
  id: string
  placeholder: string
  errormessage?: string
}

export const PhoneInput = forwardRef((props: TPhoneInputProps, ref: ForwardedRef<HTMLInputElement>) => {
  const getInputNumbersValue = function(value: string) {
    return value.replace(/\D/g, "");
  };

  const onPhoneInput = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    let inputNumbersValue = getInputNumbersValue(input.value)
    let formattedInputValue = "";
    const selectionStart = input.selectionStart;

    if (!inputNumbersValue) {
      return input.value = ''
    }

    if (input.value.length !== selectionStart) {
      if (selectionStart && /\D/g.test(input.value[selectionStart-1])) {
        input.value = input.value.substring(0, selectionStart-1) + input.value.substring(selectionStart, input.value.length);
      }
      return;
    }

    if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
      if (inputNumbersValue[0] === "9")  inputNumbersValue = 7 + inputNumbersValue;
      const firstSymbols = (inputNumbersValue[0] === "8") ? " 8" : "+7";
      formattedInputValue = firstSymbols + " ";

      if (inputNumbersValue.length > 1) {
        formattedInputValue += "(" + inputNumbersValue.substring(1, 4);
      }
      if (inputNumbersValue.length >= 5) {
        formattedInputValue += ") " + inputNumbersValue.substring(4, 7);
      }
      if (inputNumbersValue.length >= 8) {
        formattedInputValue += "-" + inputNumbersValue.substring(7, 9);
      }
      if (inputNumbersValue.length >= 10) {
        formattedInputValue += "-" + inputNumbersValue.substring(9, 11);
      }
    }
    else {
      formattedInputValue = "+7";
    }

    input.value = formattedInputValue;
  }

  const onPhoneKeyDown = function(event: KeyboardEvent<HTMLInputElement>) {
    const BACKSPACE_KEY_NAME = 'Backspace';
    const input = event.target as HTMLInputElement;
    if (event.key === BACKSPACE_KEY_NAME && getInputNumbersValue(input.value).length === 1) {
      input.value = '';
    }
  };

  const onPhonePaste = function(event: ClipboardEvent<HTMLInputElement>) {
    const input = event.target as HTMLInputElement;
    const inputNumbersValue = getInputNumbersValue(input.value);
    const pasted = event.clipboardData;
    if (pasted) {
      const pastedText = pasted.getData('Text');
      if (/\D/g.test(pastedText)) {
        input.value = inputNumbersValue;
        return;
      }
    }
  };

  return (
    <label className={styles.label}>
      <span>Номер телефона</span>
      { props.errormessage && <p className={styles.error}>{props.errormessage}</p> }
      <input
        {...props}
        className={styles.input}
        maxLength={18}
        onInput={onPhoneInput}
        onKeyDown = {onPhoneKeyDown}
        onPaste = {onPhonePaste}
        ref={ref}
        type="tel" 
      />
    </label>
  )
})