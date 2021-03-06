import axios from "axios";
// const TUITS_API = 'http://localhost:4000/api/tuits';
const API_BASE = process.env.REACT_APP_NEW_API_BASE || 'http://localhost:4000/api';
const TUITS_API = `${API_BASE}/tuits/`;



export const createTuit = async (tuit) => {
    tuit = {tuit};
    const newTuit = await axios.post(TUITS_API,tuit);
    return newTuit.data;
}
export const findAllTuits = async () => {
    const response = await axios.get(TUITS_API);
    const tuits = response.data;
    return tuits;
}
export const deleteTuit = async (tuit) => {
    const response = await axios.delete(`${TUITS_API}${tuit._id}`);
    return response.data;
}
export const updateTuit = async (tuit) => {
    await axios.put(`${TUITS_API}${tuit._id}`,tuit);
    return tuit;
}