import { createSlice } from "@reduxjs/toolkit";

const stockSlice = createSlice({
    name: "stock",

    initialState: {

        loading: false,
        error: false,
        products: [],//const [products,setProducts]=useState([]) reducers>>useState()
        firms: [],
        brands: [],
        categories: [],
        purchases: [],

    },
    reducers: {
        fetchStart: state => {
            state.loading = true;
            state.error = false;
        },
        getSucces: (state, { payload }) => {
            state.loading = false;
            state[payload.url]=payload.data// By meaning state["firms"], state["brands"], we were able to fill all states with a single reducer.

        },

        fetchFail: state => {
            state.loading = false;
            state.error = true;
        },
    },
});

//We have determined in this page the situations that will occur here and we will set the situations that will change according to their operations.

export const {
    fetchStart,
    getSucces,
    fetchFail,
} = stockSlice.actions;
export default stockSlice.reducer;
