import { configureStore } from "@reduxjs/toolkit";
import featureSlice from "./Reducers/FeatureSlice";
import courseSlice from './Reducers/CourseSlice';
import instructorSlice from './Reducers/InstructorSlice'
import resourcesSlice from './Reducers/ResourcesSlice'
import testimonialsSlice from './Reducers/TestimonialsSlice'

export const store = configureStore({
    reducer:{
        featureReducer: featureSlice,
        courseReducer: courseSlice,
        instructorReducer : instructorSlice,
        resourceReducer : resourcesSlice,
        testimonialsReducer: testimonialsSlice
        
    }
})
