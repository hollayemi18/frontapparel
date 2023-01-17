import { toast } from "react-hot-toast";

/** validate password */
export async function registerVerify(values) {
  const errors = register({}, values);

  return errors;
}

//validate login

export async function loginValidate(values) {
  const errors = loginVerify({}, values);

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
function register(error = {}, values) {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  if (!values.email || !values.password || !values.c_password) {
    error.c_password = toast.error("All field are Required...!");
  } else if (values.password.length <= 6) {
    error.password = toast.error("password must be greater than six");
  } else if (values.password !== values.c_password) {
    error.c_password = toast.error("Password not matched...!");
  } else if (!specialChars.test(values.password)) {
    error.password = toast.error("Password must have special character");
  }

  return error;
}
