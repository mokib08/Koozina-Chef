import axios from '../../api/axiosconfig'
import { loadfeature } from "../Reducers/FeatureSlice";

export const asyncLoadFeature = () => async (dispatch, getState) => {
    try {
        const {data} = await axios.get("/features");
        dispatch(loadfeature(data))

    } catch (error) {
        console.log(error);
        
    }
}