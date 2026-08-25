import axios from "../../api/axiosconfig";
import { loadcourse } from "../Reducers/CourseSlice";



export const asyncLoadCourse = () => async (dispatch) => {
    try {
        const {data} = await axios.get("/courses");
        dispatch(loadcourse(data))
    } catch (error) {
        console.log(error);
        
    }
}