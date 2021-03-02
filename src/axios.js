import axios from "axios";

const config = {
  headers: {"Access-Control-Allow-Origin": "*"}
};
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  https: config,
});

export default instance;