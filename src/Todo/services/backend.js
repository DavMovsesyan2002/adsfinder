import axios from "./axios.ts";

const signIn = async (paylod) => {
    const { data } = await axios.post('https://secure-badlands-92567.herokuapp.com/users/signIn', paylod);
    return data; 
}
