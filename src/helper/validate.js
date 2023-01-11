import { toast } from "react-hot-toast";

//validate login

export async function emailValidate(values) {
  const errors = emailVerify({}, values);

  return errors;
}
//validate login
function emailVerify(error = [], values) {
  if (!values.email || !values.password) {
    error.email = toast.error("all field is required....");
  } else if (values.email.includes(" ") || values.password.includes(" ")) {
    error.email = toast.error("invaid email or password...");
  }
  return error;
}
