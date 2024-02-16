// import { useState } from "react";
import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";
import { useInput } from "../hooks/useInput";

// keystroke validation version

export default function Login() {
  // replaced by useInput
  // const [enteredValues, setEnteredValues] = useState({
  //   email: "",
  //   password: "",
  // });

  // const [didEdit, setDidEdit] = useState({
  //   email: false,
  //   password: false,
  // });

  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
    setEnteredValue: setEnteredEmail,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError,
    setEnteredValue: setEnteredPassword
  } = useInput("", (value) => hasMinLength(value, 6));

  // replaced by useInput
  // const emailIsInvalid =
  //   didEdit.email &&
  //   (!isEmail(enteredValues.email) || !isNotEmpty(enteredValues.email));

  // const passwordIsInvalid =
  //   didEdit.password &&
  //   (!isNotEmpty(enteredValues.password) ||
  //     !hasMinLength(enteredValues.password, 6));

  function handleSubmit(event) {
    event.preventDefault();
    // replaced by useInput
    // if (emailIsInvalid || passwordIsInvalid) {
    //   return;
    // }

    if (emailHasError || passwordHasError) {
      return;
    }

    console.log("Submitted!");
    console.log(emailValue, passwordValue);

    setEnteredEmail(''); 
    setEnteredPassword('');
    // setEnteredValues({
    //   email: "",
    //   password: "",
    // });
  }

  // replaced by useInput
  // function handleInputChange(identifier, value) {
  //   setEnteredValues((prevValues) => ({
  //     ...prevValues,
  //     [identifier]: value,
  //   }));

  //   setDidEdit((prevEdit) => ({
  //     ...prevEdit,
  //     [identifier]: false,
  //   }));
  // }

  // function handleInputBlur(identifier) {
  //   setDidEdit((prevEdit) => ({
  //     ...prevEdit,
  //     [identifier]: true,
  //   }));
  // }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          // onChange={(event) => handleInputChange("email", event.target.value)}
          onChange={handleEmailChange}
          // onBlur={() => handleInputBlur("email")}
          onBlur={handleEmailBlur}
          // value={enteredValues.email}
          value={emailValue}
          // error={emailIsInvalid && "Please enter a valid email"}
          error={emailHasError && "Please enter a valid email"}
        />
        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          // onChange={(event) =>
          //   handleInputChange("password", event.target.value)
          // }
          onChange={handlePasswordChange}
          // onBlur={() => handleInputBlur("password")}
          onBlur={handlePasswordBlur}
          // value={enteredValues.password}
          value={passwordValue}
          // error={passwordIsInvalid && "Please enter a valid password"}
          error={passwordHasError && "Please enter a valid password"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
