import axios from "axios";

const newRequest = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

export default newRequest;
