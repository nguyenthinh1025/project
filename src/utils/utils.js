import axios from "axios";
import { http } from "./response";

export const SendEmailContact = (data) => {
  return (dispatch) => {
    axios
      .post("http://localhost:5000/api/contact", data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const SendEmailCart = (data) => {
  return (dispatch) => {
    axios
      .post("http://localhost:5000/api/cart", data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
