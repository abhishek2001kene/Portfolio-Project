import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
  projects: JSON.parse(localStorage.getItem("projects")) || [
    {
      id: 1,
      Title: "ABCD",
      Discrip: "Default features text here...",
      imgUrl:"",
      proUrl:"",
      srcUrl:"",
    },
  ],
};


export const ProjectSlice = createSlice({
  name: "Projects",
  initialState,

  reducers: {
    addPro: (state, action) => {
      const Newpro = {
        id: nanoid(),
        Title: action.payload.Title,
        Discrip: action.payload.Discrip,
        imgUrl:action.payload.imgUrl,
        proUrl:action.payload.proUrl,
        srcUrl:action.payload.srcUrl
      };
      state.projects.push(Newpro);
    },

    deletePro: (state, action) => {
      state.projects = state.projects.filter(
        (pro) => pro.id !== action.payload.id
      );
    },
  },
});




export const { addPro, deletePro } = ProjectSlice.actions;
export default ProjectSlice.reducer;
