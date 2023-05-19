import { createSlice } from '@reduxjs/toolkit';

const initialState = ({
    mainFilm: "",
    topFilm: "",
    newFilm: "",
    actors: ""
})

const dataFilmStore = createSlice({
    name: 'calc',
    initialState,
    reducers: {
        setMainfilm: (state, action) => {
            state.mainFilm = action.payload
        },
        setTopFilm: (state, action) => {
            state.topFilm = action.payload
        },
        setNewFilm: (state, action) => {
            state.newFilm = action.payload
        },
        setActors: (state, action) => {
            state.actors = action.payload
        }
    }
});

export const {
    setMainfilm,
    setTopFilm,
    setNewFilm,
    setActors
} = dataFilmStore.actions;


export default dataFilmStore.reducer;