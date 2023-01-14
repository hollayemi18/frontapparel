import { toast } from "react-hot-toast";

/** validate password */
export async function passwordValidate(values) {
  const errors = passwordVerify({}, values);

  return errors;
}

export async function c_passwordValidate(values) {
  const errors = c_passwordverify({}, values);

  return errors;
}
//validate login

export async function loginValidate(values) {
  const errors = loginVerify({}, values);

  return errors;
}
//register verify

export async function registerValidate(values) {
  const errors = emailVerify({}, values);

  return errors;
}
//validate login
function loginVerify(error = [], values) {
  if (!values.email || !values.password) {
    error.email = toast.error("All field are required....!");
  } else if (values.email.includes(" ")) {
    error.email = toast.error("Wrong Email...!");
  }
  return error;
}

/** validate email */
function emailVerify(error = {}, values) {
  if (!values.email) {
    error.email = toast.error("Email Required...!");
  } else if (values.email.includes(" ")) {
    error.email = toast.error("Wrong Email...!");
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    error.email = toast.error("Invalid email address...!");
  }

  return error;
}

/** validate password */
function passwordVerify(errors = {}, values) {
  /* eslint-disable no-useless-escape */
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  if (!values.password) {
    errors.password = toast.error("Password Required...!");
  } else if (values.password.length < 7) {
    errors.password = toast.error(
      "Password must be more than 4 characters long"
    );
  } else if (!specialChars.test(values.password)) {
    errors.password = toast.error("Password must have special character");
  }

  return errors;
}

function c_passwordverify(errors = {}, values) {
  if (!values.c_password) {
    errors.c_password = toast.error("confirm Password Required...!");
  } else if (values.password !== values.c_password) {
    errors.c_password = toast.error("Password not matched...!");
  }
}
