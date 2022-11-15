import axios from "axios";

const instance = axios.create({
    baseURL: 'http://146.185.154.90:8000/messages'
});
  
export default instance;