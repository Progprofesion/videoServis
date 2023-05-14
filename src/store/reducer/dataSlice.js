import { createSlice } from '@reduxjs/toolkit';

const initialState = ({
    mainFilm: "",
    topFilm: "",
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
        }
    }
});

export const {
    setMainfilm,
    setTopFilm,

} = dataFilmStore.actions;


export default dataFilmStore.reducer;