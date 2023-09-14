import axios from "axios"
import {
  NEW_PRIVATE1_USERNAME,
  NEW_PRIVATE1_PASSWORD
} from "react-native-dotenv"
const newprivate = axios.create({
  baseURL: "https://devstringx.com",
  auth: { username: NEW_PRIVATE1_USERNAME, password: NEW_PRIVATE1_PASSWORD },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
