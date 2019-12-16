// export const auth = () => ({
//       type: 'auth',
// });
// export const getNews = () => ({
//       type: 'GET_NEWS',
// });
import {AUTH , GET_NEWS } from "./ActionTypes"
console.log("**Actions");
export const auth = (email , password) => {
  console.log("in Action file" , email , password);
  return {
    type : AUTH,
    payload:{
      email:email,
      password:password
    }
  };
};
export const getNews = () => {
  console.log("in Action file");
  return {
    type : GET_NEWS,
  };
};
