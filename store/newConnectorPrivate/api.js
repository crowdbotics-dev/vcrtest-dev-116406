import axios from "axios"
import {
  NEW_CONNECTORPRIVATE23_USERNAME,
  NEW_CONNECTORPRIVATE23_PASSWORD
} from "react-native-dotenv"
const newConnectorPrivate = axios.create({
  baseURL: "https://devstringx.com",
  auth: {
    username: NEW_CONNECTORPRIVATE23_USERNAME,
    password: NEW_CONNECTORPRIVATE23_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
