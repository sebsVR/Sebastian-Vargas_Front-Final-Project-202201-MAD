import axios from 'axios';

const LOGIN_URL = 'http://localhost:4000/user/login';
const REGISTER_URL = 'http://localhost:4000/user/register';

export async function register(user) {
  return await axios.post(REGISTER_URL, user);
}

export function login(user) {
  return axios.post(LOGIN_URL, user);
}
