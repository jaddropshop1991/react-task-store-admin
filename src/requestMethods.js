import axios from "axios";

const BASE_URL = "http://localhost:500/api/";

const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken ;
// const TOKEN = () => {
//     if (
//       JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user)
//         .currentUser.accessToken
//     ) {
//       return JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user)
//         .currentUser.accessToken;
//     } else { return '' }
//   };

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;
// console.log(TOKEN)
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});



export const userRequest = axios.create({
  baseURL: BASE_URL,

  headers: { token: `Bearer ${TOKEN}` },
});