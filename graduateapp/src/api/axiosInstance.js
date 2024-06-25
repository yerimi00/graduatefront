import axios from "axios";

export default axios.create({
  baseURL: "https://jjweidon.pythonanywhere.com",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});
