import axios from "axios";

// base url to make requests to create movies database

const instance = axios.create({
  baseURL: "https://portfolio-om.herokuapp.com/",
});
export default instance;
