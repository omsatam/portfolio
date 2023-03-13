import axios from "axios";

// base url to make requests to create movies database

const instance = axios.create({
  baseURL: "https://raw.githubusercontent.com/omsatam/portfolio/main/server/",
});
export default instance;
