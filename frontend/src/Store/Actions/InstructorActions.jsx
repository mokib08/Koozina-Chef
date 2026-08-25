import axios from '../../api/axiosconfig'
import { loadinstructor } from "../Reducers/InstructorSlice";

export const asyncLoadInstructor = () => async (dispatch, getState) => {
    try {
        const {data} = await axios.get("/instructore");
        dispatch(loadinstructor(data))

    } catch (error) {
        console.log(error);
        
    }
}