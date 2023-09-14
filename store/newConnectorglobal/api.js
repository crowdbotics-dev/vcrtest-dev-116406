import axios from "axios"
import {
  NEW_CONNECTORGLOBAL_USERNAME,
  NEW_CONNECTORGLOBAL_PASSWORD
} from "react-native-dotenv"
const newConnectorglobal = axios.create({
  baseURL: "https://DEVSRINGX.COM",
  auth: {
    username: NEW_CONNECTORGLOBAL_USERNAME,
    password: NEW_CONNECTORGLOBAL_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
