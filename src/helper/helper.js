import axios from "axios";
//import jwt_decode from "jwt-decode";

/* register user function */
export async function registerUser(credentials) {
  try {
    const {
      data: { msg },
      status,
    } = await axios.post(`http://localhost:8080/register`, credentials);

    let { email } = credentials;

    /** send email */
    if (status === 201) {
      await axios.post("http://localhost:8080/registerMail", {
        userEmail: email,
        text: msg,
      });
    }

    return Promise.resolve(msg);
  } catch (error) {
    return Promise.reject({ error });
  }
}
