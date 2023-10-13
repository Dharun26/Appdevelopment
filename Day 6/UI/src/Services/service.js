import axios from "axios";
let jwtToken = localStorage.getItem('Token')
const authheader ='Bearer ${jwtToken}';
console.log(jwtToken)
const headers = {
  'Authorization': authheader,
  'Content-Type': 'application/json',
};
const URI="http://localhost:8080"
const userRegister = (register) => axios.post(`${URI}/api/v1/entry/post`, register)
const userLogin = (signin) => axios.post(`${URI}/api/v1/entry/auth_user`, signin)

export {userRegister, userLogin};