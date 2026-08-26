
import axios from '../../api/axiosconfig'
import { loadtestimonials } from "../Reducers/TestimonialsSlice";

export const asyncLoadTestimonial = () => async (dispatch, getState) => {
    try {
        const {data} = await axios.get("/testimonials");
        dispatch(loadtestimonials(data))

    } catch (error) {
        console.log(error);
        
    }
}