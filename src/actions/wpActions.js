
import {REGISTER_USER} from "./wpActionTypes"

//console.log("**Actions");

export const registerUser = (data) => {
//  console.log("in Action file"  ,data);
  return {
    type : REGISTER_USER,
    payload : data
  };

};
