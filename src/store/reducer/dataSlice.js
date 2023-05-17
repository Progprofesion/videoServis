import { createSlice } from '@reduxjs/toolkit';

const initialState = ({
    mainFilm: "",
    topFilm: "",
    genre: [],
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
        setGenre: (state, action) => {
            state.genre.push(action.payload)
        }
    }
});

export const {
    setMainfilm,
    setTopFilm,
    setGenre
} = dataFilmStore.actions;


export default dataFilmStore.reducer;