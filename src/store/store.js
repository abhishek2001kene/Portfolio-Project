import { configureStore } from "@reduxjs/toolkit";
import ProjectReducer from "../feature/projectsSlice";

export const store = configureStore({
    reducer: {
        projects: ProjectReducer,
    },
});
