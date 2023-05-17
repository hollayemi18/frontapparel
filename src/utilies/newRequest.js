import axios from "axios";

const newRequest = axios.create({
  baseURL: process.env.BACKEND_URL,
});

export default newRequest;
