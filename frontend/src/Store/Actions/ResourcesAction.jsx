import axios from '../../api/axiosconfig'
import { loadresources } from "../Reducers/ResourcesSlice";

export const asyncLoadResource = () => async (dispatch, getState) => {
    try {
        const {data} = await axios.get("/resources");
        dispatch(loadresources(data))

    } catch (error) {
        console.log(error);
        
    }
}